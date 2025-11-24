import { google } from "@ai-sdk/google";
import { streamObject } from "ai";
import type { NextRequest } from "next/server";
import { z } from "zod";
import { getUserSettingsByUserId } from "@/actions/user-settings";
import { getCurrentUser } from "@/lib/auth/helpers";
import {
  buildArticleSummaries,
  buildNewsletterPrompt,
} from "@/lib/newsletter/prompt-builder";
import { prepareFeedsAndArticles } from "@/lib/rss/feed-refresh";

export const maxDuration = 300; // 5 minutes for Vercel Pro

/**
 * Newsletter generation result schema
 */
const NewsletterSchema = z.object({
  suggestedTitles: z.array(z.string()).length(5),
  suggestedSubjectLines: z.array(z.string()).length(5),
  body: z.string(),
  topAnnouncements: z.array(z.string()).length(5),
  additionalInfo: z.string().optional(),
});

/**
 * POST /api/newsletter/generate-stream
 *
 * Streams newsletter generation in real-time using Vercel AI SDK.
 * The AI SDK handles all streaming complexity automatically.
 *
 * @returns AI SDK text stream response
 */
export async function POST(req: NextRequest) {
  try {
    // Check for Google API key
    if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
      console.error("GOOGLE_GENERATIVE_AI_API_KEY is not set");
      return Response.json(
        {
          error:
            "Google API key not configured. Please set GOOGLE_GENERATIVE_AI_API_KEY in your environment variables.",
        },
        { status: 500 },
      );
    }

    const body = await req.json();
    const { feedIds, startDate, endDate, userInput } = body;

    // Validate required parameters
    if (!feedIds || !Array.isArray(feedIds) || feedIds.length === 0) {
      return Response.json(
        { error: "feedIds is required and must be a non-empty array" },
        { status: 400 },
      );
    }

    if (!startDate || !endDate) {
      return Response.json(
        { error: "startDate and endDate are required" },
        { status: 400 },
      );
    }

    // Get authenticated user and settings
    const user = await getCurrentUser();
    const settings = await getUserSettingsByUserId(user.id);

    // Fetch and prepare articles
    const articles = await prepareFeedsAndArticles({
      feedIds,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });

    if (articles.length === 0) {
      return Response.json(
        {
          error:
            "No articles found for the selected date range. Please try a different date range or ensure your feeds have articles.",
        },
        { status: 400 },
      );
    }

    // Build the AI prompt
    const articleSummaries = buildArticleSummaries(articles);
    const prompt = buildNewsletterPrompt({
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      articleSummaries,
      articleCount: articles.length,
      userInput,
      settings,
    });

    // Stream newsletter generation with AI SDK
    const result = streamObject({
      model: google("gemini-2.5-pro"),
      schema: NewsletterSchema,
      prompt,
      onFinish: async () => {
        // Optional: Add any post-generation logic here
      },
    });

    // Return AI SDK's native stream response
    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Error in generate-stream:", error);

    // Provide more detailed error information
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
      // Check for common API errors
      if (error.message.includes("API key")) {
        errorMessage =
          "Invalid Google API key. Please check your GOOGLE_GENERATIVE_AI_API_KEY environment variable.";
      } else if (error.message.includes("model")) {
        errorMessage =
          "Invalid model name or model not available. Please check the Gemini model name.";
      } else if (error.message.includes("rate limit") || error.message.includes("quota")) {
        errorMessage =
          "API rate limit exceeded. Please try again later or check your Google AI Studio quota.";
      }
    }

    return Response.json(
      { error: `Failed to generate newsletter: ${errorMessage}` },
      { status: 500 },
    );
  }
}
