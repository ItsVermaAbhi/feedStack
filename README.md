# AI Newsletter Generator — Built with Next.js 16, Google Gemini, MongoDB, Prisma & Clerk

[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

**The ultimate tool for newsletter creators who want to publish consistently without the burnout.** Transform your RSS feeds into professionally curated newsletters in seconds—no more spending hours hunting for content or struggling with writer's block. Subscribe to your favorite content sources, and let AI craft compelling newsletters with suggested titles, subject lines, and perfectly formatted content—ready to send to your audience.

> **What Makes This Special:** This isn't just another newsletter tool. It features **intelligent cross-user caching** that makes the system faster and more efficient for everyone, **article deduplication** to save storage, and **real-time streaming** with the Vercel AI SDK so you watch your newsletter being created live. Built with clean, maintainable code using industry-standard patterns—perfect for learning or building upon.

### 🎯 Clean Architecture & Simple Code
This project prioritizes **clean, readable code** that beginners can understand and experienced developers can build upon:
- **Vercel AI SDK**: Zero custom streaming code—uses standard `streamObject` and `useObject` hooks
- **Type-Safe**: Full TypeScript support with Zod schema validation throughout
- **Well-Documented**: Every function includes JSDoc comments explaining its purpose
- **Modern Patterns**: React Server Components, Server Actions, and standard Next.js patterns
- **Maintainable**: Clean separation of concerns—database, business logic, and UI are clearly separated

Perfect for developers who want to learn modern full-stack development or build production-ready SaaS applications.

## 👇🏼 DO THIS Before You Get Started

> Note: Using the referral links below helps support the development of this project through affiliate partnerships, allowing me to provide these tutorials for free!

### 1) Set up Clerk using our link! (It supports us in doing this for FREE!)

Create a Clerk account at [Clerk](https://go.clerk.com/sonny) for authentication, billing and user management

### 2) Set up MongoDB Atlas

Create a free MongoDB Atlas account at [MongoDB Atlas](https://fandf.co/48QTwh2) for your database

### 3) Set up Google Gemini

Create a Google AI Studio account at [Google AI Studio](https://aistudio.google.com) to power your AI newsletter generation with Gemini

## What Is This App?

Think of this as your **personal AI newsroom**. Here's how it works in simple terms:

1. **You subscribe** to RSS feeds (blogs, news sites, industry publications)
2. **The system fetches** articles from those feeds automatically
3. **AI curates** the content and generates a professional newsletter
4. **You get** 5 title options, 5 subject line options, a complete newsletter body, and top 5 announcements
5. **Copy & paste** into your email platform and send to your audience

### What Are RSS Feeds?

RSS feeds are like automatic news delivery systems. Most blogs, news sites, and content platforms publish RSS feeds—a standard format that lets apps like this one automatically collect new articles. Instead of manually visiting 10 different websites to find content for your newsletter, RSS feeds bring everything to you automatically.

**Popular RSS feed sources:**
- TechCrunch, Wired, The Verge (tech news)
- Medium, Dev.to, Hashnode (developer blogs)
- Industry-specific blogs and publications
- Your competitors' blogs (keep an eye on them!)
- News aggregators and curated lists

---

## 🚀 Before We Dive In - Join the PAPAFAM!

Want to build apps like this from scratch? This AI Newsletter Generator is just one example of what you'll learn in **Zero to Full Stack Hero** - our comprehensive course that teaches you to build production-ready, revenue-generating applications.

### Why Join Zero to Full Stack Hero?

**Transform Your Career with Modern Full-Stack Development** - Learn to build real-world applications using the latest technologies like Next.js, AI integration, authentication, databases, and deployment strategies.

### 🎯 What You'll Master:

- **React Native & Expo** - Build cross-platform mobile apps for iOS, Android, and Web
- **AI Integration** - Build intelligent apps with OpenAI, Claude, and custom AI workflows
- **Full-Stack Architecture** - From frontend to backend, databases to deployment
- **Modern Authentication** - Clerk, Auth0, and custom auth solutions
- **CMS Integration** - Sanity, Contentful, and headless CMS architectures
- **Database Mastery** - SQL, NoSQL, Prisma, Convex, and more
- **Payment Integration** - Stripe, subscription models, and billing systems
- **Real-Time Features** - WebSockets, live updates, and collaborative apps
- **Deployment & DevOps** - Vercel, AWS, Docker, and CI/CD pipelines

### 👥 Join the PAPAFAM Community:

- **1,000+ Active Developers** helping each other succeed
- **Weekly Live Coding Sessions** with Sonny Sangha
- **Code Reviews & Feedback** from industry professionals
- **Job Placement Support** and career guidance
- **Exclusive Discord Community** with 24/7 support
- **Networking Opportunities** with like-minded developers

### 💼 Real Results from PAPAFAM Graduates:

- **$50k-$150k+ Salary Increases** reported by graduates
- **Portfolio Projects** that impress employers and land jobs
- **Interview Preparation** and technical assessment practice
- **Freelancing Guidance** to start your own business
- **Lifetime Access** to all course materials and updates

### 🎁 What's Included:

- **100+ Hours** of premium video content
- **Private GitHub Repositories** with complete source code
- **Exclusive Templates & Boilerplates** to accelerate development
- **Monthly Q&A Sessions** with industry experts
- **Certificate of Completion** to showcase your skills

**Ready to level up your development skills and build the future?**

[🚀 **Join Zero to Full Stack Hero NOW**](https://www.papareact.com/course)

_Join thousands of developers who've transformed their careers with PAPAFAM!_

---

## Let's dive back into the Features!

### For Newsletter Creators

- **RSS Feed Management** 📰: Subscribe to multiple RSS feeds and manage them in one dashboard
  - **Starter Plan**: Up to 3 RSS feeds
  - **Pro Plan**: Unlimited RSS feeds
- **AI-Powered Generation** 🤖: Get complete newsletters generated by AI in seconds:
  - 5 compelling newsletter title options
  - 5 email subject line variations (optimized for opens)
  - Complete newsletter body with professional formatting
  - Top 5 most important announcements/highlights
  - Additional insights and recommendations
- **Custom Time Ranges** 📅: Generate newsletters for any period:
  - Last 7 days (weekly newsletters)
  - Last 30 days (monthly roundups)
  - Custom date ranges for special editions
- **Smart Personalization** ✨: Customize generation with:
  - Newsletter name and description
  - Target audience specification
  - Brand voice and company info
  - Default tone (professional, casual, technical, etc.)
  - Custom disclaimers and footers
- **Newsletter History** 💾: Pro users can save and access all past newsletters
  - View, edit, and reuse successful formats
  - Track what content resonates with your audience
  - Never lose your work
- **Real-Time Generation** ⚡: Watch your newsletter being created live with streaming responses
- **Copy-Paste Ready** 📋: Export formatted content ready for any email platform
  - Mailchimp, ConvertKit, Substack compatible
  - Markdown formatting for easy customization
  - Download as plain text file

### Technical Features (The Smart Stuff)

#### Intelligent Cross-User Caching
The system uses a **3-hour cache window** (This can be customized) that benefits all users. When someone fetches a feed, the data is fresh for everyone for 3 hours. This means:
- Faster newsletter generation (no waiting for feed refreshes)
- Fewer API calls to RSS providers
- More reliable (no rate limiting issues)
- Cost-effective at scale

**Example:** If User A fetches TechCrunch at 10:00 AM, and User B wants to generate a newsletter at 10:30 AM using TechCrunch, the system uses the cached articles from User A's fetch. Smart, right?

#### Article Deduplication
Articles are stored once, even if they appear in multiple feeds. Each article has a unique identifier (GUID) that prevents duplicates:
- Same article in multiple feeds = stored once
- Saves database storage (~50% reduction)
- Tracks which feeds reference each article
- Identifies trending topics (articles in many feeds)

#### Real-Time Streaming with Vercel AI SDK
Newsletter generation streams in real-time using the **Vercel AI SDK** for a seamless user experience:
- **Progressive Generation**: See your newsletter being created live as the AI writes
- **Clean Architecture**: No custom streaming code—AI SDK handles everything
- **User Feedback**: Toast notifications for feed refresh and article analysis
- **Type-Safe**: Full TypeScript support with Zod schema validation
- **Simple & Maintainable**: Built with standard patterns that any developer can understand

The AI SDK's `streamObject` and `useObject` hooks make streaming incredibly simple—no manual SSE parsing or complex state management required.

#### Tech Stack Highlights

- **Next.js 16** with App Router and React 19
- **Turbopack** for lightning-fast development
- **TypeScript** end-to-end with strict mode
- **Tailwind CSS v4** for modern styling
- **Clerk** for authentication, billing, and user management
- **MongoDB + Prisma** for database with type-safe queries
- **Google Gemini 2.5 Pro** (customizable) for intelligent newsletter generation
- **Vercel AI SDK** for seamless streaming AI responses
  - `streamObject` on the server for type-safe streaming
  - `useObject` hook on the client for real-time updates
  - Zero custom streaming code—clean and simple
- **RSS Parser** for reliable feed fetching
- **Biome** for code quality and formatting
- **React 19** with Server Components for optimal performance

## How It Works

### The Newsletter Generation Flow

```mermaid
graph TB
    User[Newsletter Creator] --> Dashboard[Dashboard]
    Dashboard --> Generate[Generate Newsletter]
    
    Generate --> Cache{Fetched Within 3 Hours?}
    Cache -->|Yes| Articles[Retrieve Articles]
    Cache -->|No| Fetch[Fetch RSS Feeds]
    
    Fetch --> DB[MongoDB Database]
    DB --> Articles
    
    Articles --> Prompt[Newsletter Prompt]
    Prompt --> AI[Google Gemini]
    
    AI --> Stream[Real-Time Stream]
    Stream --> User
    
    Stream --> Save{Pro User?}
    Save -->|Yes| DB
    Save -->|No| Skip[Display Only]
    
    style AI fill:#10a37f
    style DB fill:#00ed64
    style User fill:#6366f1
    style Stream fill:#f59e0b
```

### The Smart Caching System

Here's how the cross-user caching saves time and resources:

```mermaid
sequenceDiagram
    participant U1 as User A
    participant U2 as User B
    participant System
    participant DB as Database
    participant RSS as RSS Feed
    
    Note over U1,RSS: 10:00 AM - User A generates newsletter
    U1->>System: Generate newsletter with TechCrunch
    System->>DB: Check when TechCrunch last fetched (any user)
    DB-->>System: Never fetched
    System->>RSS: Fetch TechCrunch RSS feed
    RSS-->>System: 50 articles
    System->>DB: Store articles + lastFetched = 10:00 AM
    System->>U1: Generate & stream newsletter
    
    Note over U1,RSS: 10:30 AM - User B generates newsletter
    U2->>System: Generate newsletter with TechCrunch
    System->>DB: Check when TechCrunch last fetched (any user)
    DB-->>System: Last fetched 30 min ago by User A
    Note over System: Within 3-hour cache window ✓
    System->>DB: Use existing articles (no RSS fetch!)
    System->>U2: Generate & stream newsletter
    
    Note over System: User B benefits from User A's fetch!
```

### Article Deduplication Strategy

The system prevents storing duplicate articles across feeds:

```mermaid
graph LR
    FA[Feed A] --> System[Deduplication System]
    FB[Feed B] --> System
    FC[Feed C] --> System
    
    System --> DB{Article Exists?}
    DB -->|No| Create[Create New]
    DB -->|Yes| Update[Update sourceFeedIds]
    
    Create --> Final[Database]
    Update --> Final
    
    style System fill:#3b82f6
    style Final fill:#10b981
```

**Result:** The article "GPT-5 Announced" appears in 3 feeds but is stored once, with `sourceFeedIds: [Feed A, Feed B, Feed C]`. This not only saves storage but also helps identify trending topics!

**Performance & Complexity:**
- ⚡ **Lookup**: O(1) via unique index on `guid`
- 💾 **Storage Savings**: ~40-50% reduction for overlapping feeds
- 📊 **Trending Detection**: Articles in multiple feeds = high importance
- ⚠️ **Note**: The deduplication happens at insert time using MongoDB's `upsert` operation, making it very efficient

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, or pnpm
- Accounts: Clerk, MongoDB Atlas, Google AI Studio

### 1) Clone & Install

```bash
# Clone the repository
git clone <your-repo-url>
cd ai-newsletter-saas-nextjs-16-mongodb-clerk

# Install dependencies
pnpm install
# or
npm install
# or
yarn install
```

### 2) Environment Variables

Create a `.env.local` file in the **project root**:

> 💡 **Tip:** Copy the provided `.env.example` file and rename it to `.env.local`, then fill in your actual values:
> ```bash
> cp .env.example .env.local
> ```

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# MongoDB Database
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/newsletter-db?retryWrites=true&w=majority

# Prisma Accelerate (Optional - for edge optimization)
# DATABASE_URL=prisma://accelerate.prisma-data.net/?api_key=your_api_key

# Google Gemini API
GOOGLE_GENERATIVE_AI_API_KEY=AIzaSy-your_google_api_key_here
```

**Important Security Notes:**

- **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**: Safe to expose in client code (starts with `pk_test_` or `pk_live_`)
- **CLERK_SECRET_KEY**: Keep secret! Never commit to git (starts with `sk_test_` or `sk_live_`)
- **DATABASE_URL**: Your MongoDB connection string with credentials
- **GOOGLE_GENERATIVE_AI_API_KEY**: Keep secret! Never expose publicly (starts with `AIzaSy`)

> **Tip:** The `NEXT_PUBLIC_` prefix makes variables accessible in client-side code. Only use this prefix for non-sensitive data like publishable keys and project IDs.

### 3) Configure Clerk

1. Create a new application at [Clerk](https://go.clerk.com/sonny)
2. Choose authentication methods:
   - **Email & Password** (recommended for simplicity)
   - **Google OAuth** (recommended for user convenience)
   - **GitHub OAuth** (optional, great for developer audiences)
3. Copy your API keys:
   - Navigate to **API Keys** in Clerk Dashboard
   - Copy **Publishable Key** → `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - Copy **Secret Key** → `CLERK_SECRET_KEY`
4. Configure allowed origins:
   - Go to **Domains** in Clerk Dashboard
   - Add `http://localhost:3000` for development
   - Add your production domain when deploying
5. Set up pricing plans:
   - Navigate to **Billing** → **Pricing Plans**
   - Create a **Starter** plan (free or low-cost)
   - Create a **Pro** plan with extended features
   - Set plan limits (RSS feeds, newsletter history, etc.)

### 4) Configure MongoDB Atlas & Prisma

#### Create MongoDB Database

1. Sign up at [MongoDB Atlas](https://fandf.co/48QTwh2)
2. Create a new **FREE** M0 cluster (512MB, perfect for getting started)
3. Choose a cloud provider and region (AWS, Google Cloud, or Azure)
4. Create a database user:
   - Username: `newsletter-admin` (or your choice)
   - Password: Generate a secure password
   - **Save this password!** You'll need it for the connection string
5. Whitelist IP addresses:
   - Add `0.0.0.0/0` to allow connections from anywhere (for development)
   - For production, restrict to specific IPs
6. Get your connection string:
   - Click **Connect** → **Connect your application**
   - Copy the connection string
   - Replace `<password>` with your database user password
   - Replace `myFirstDatabase` with your database name (e.g., `newsletter-db`)

#### Initialize Prisma

```bash
# Generate Prisma Client
pnpm prisma:generate
# or
npm run prisma:generate

# Push database schema to MongoDB
pnpm prisma:push
# or
npm run prisma:push

# (Optional) Open Prisma Studio to view your database
pnpm prisma:studio
# or
npm run prisma:studio
```

**What these commands do:**
- `prisma:generate` - Creates TypeScript types from your Prisma schema
- `prisma:push` - Syncs your schema with MongoDB (creates collections and indexes)
- `prisma:studio` - Opens a visual database browser at `http://localhost:5555`

### 5) Configure Google Gemini

1. Create a Google AI Studio account at [Google AI Studio](https://aistudio.google.com)
2. Sign in with your Google account (free to use)
3. Create an API key:
   - Navigate to [Get API Key](https://aistudio.google.com/apikey)
   - Click **Create API Key** in new project (or select existing project)
   - **Copy the key immediately** (you can see it again, but it's easier to save it now)
   - Add to `.env.local` as `GOOGLE_GENERATIVE_AI_API_KEY`
4. Choose your AI model:
   - By default, this app uses **Gemini 2.5 Pro** (`gemini-2.5-pro` model)
   - **The model is fully customizable** - edit `app/api/newsletter/generate-stream/route.ts` line 100 and `actions/generate-newsletter.ts` line 76 to use:
     - `gemini-2.5-pro` (default) - Best quality, advanced reasoning
     - `gemini-1.5-pro` - High quality, excellent for long context
     - `gemini-1.5-flash` - Faster and more cost-effective
     - `gemini-2.0-flash-exp` - Experimental, fast model (if available)
   - Check model availability in your region at [Google AI Studio](https://aistudio.google.com)

**Cost Considerations:**
- Google Gemini offers generous free tier for development
- Newsletter generation typically costs $0.001-0.01 per newsletter with Gemini 2.5 Pro (depending on length)
- Gemini 1.5 Flash reduces costs significantly while maintaining good quality
- 1,000 newsletters ≈ $1-10 (Gemini 2.5 Pro) or $0.10-1 (Gemini 1.5 Flash)
- Monitor usage in Google AI Studio Dashboard → Usage & Limits

### 6) Run the Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**First Time Setup:**
1. Sign up for an account (creates user in MongoDB automatically)
2. Go to Settings to configure your newsletter preferences
3. Add RSS feeds (try TechCrunch: `https://techcrunch.com/feed/`)
4. Generate your first newsletter!

## Database Schema Overview

The app uses **4 main models** in MongoDB:

### User
Stores minimal user info (Clerk handles authentication):
- `clerkUserId` - Links to Clerk user
- Relationships: RSS feeds, newsletters, settings

### UserSettings
Customization preferences for newsletter generation:
- Newsletter name, description, target audience
- Brand voice, company info, industry
- Default tone and styling preferences

### RssFeed
RSS feed subscriptions:
- Feed URL, title, description
- `lastFetched` timestamp (used for caching)
- Relationships: articles

### RssArticle
Individual articles with deduplication:
- `guid` - **Unique identifier** (prevents duplicates)
- `sourceFeedIds` - Array of all feeds referencing this article
- Title, content, summary, publication date
- Categories, author, images

### Newsletter
Generated newsletters (Pro users only):
- 5 suggested titles, 5 subject lines
- Newsletter body (markdown formatted)
- Top 5 announcements
- Date range and feeds used
- User input/context

**Key Design Decisions:**
- **MongoDB** for flexible schema and easy scaling
- **GUID-based deduplication** to prevent storing duplicate articles
- **Indexes on common queries** (`feedId + pubDate`, `userId + createdAt`)
- **Cascade deletes** to maintain data integrity

## Deployment to Vercel

### 1) Prepare for Production

Update your environment variables for production:

```bash
# Make sure these are production keys (not test keys)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_live_...
CLERK_SECRET_KEY=sk_live_...
DATABASE_URL=mongodb+srv://... (production cluster)
OPENAI_API_KEY=sk-proj-...
```

### 2) Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Option B: Using GitHub Integration

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click **Add New Project**
4. Import your GitHub repository
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
6. Add environment variables:
   - Click **Environment Variables**
   - Add all variables from `.env.local`
   - Make sure to select **Production**, **Preview**, and **Development** environments
7. Click **Deploy**

### 3) Post-Deployment Setup

After deployment:

1. **Update Clerk Settings**:
   - Go to Clerk Dashboard → Domains
   - Add your Vercel domain (e.g., `https://your-app.vercel.app`)
   - Add to allowed origins and redirect URLs

2. **Update MongoDB Network Access**:
   - Go to MongoDB Atlas → Network Access
   - Add Vercel's IP addresses or keep `0.0.0.0/0` for simplicity
   - Note: Vercel uses dynamic IPs, so `0.0.0.0/0` is common for serverless

3. **Test Production Deploy**:
   - Visit your Vercel URL
   - Test authentication flow
   - Test newsletter generation
   - Check Vercel logs for any errors

4. **Set up Custom Domain** (Optional):
   - Go to Vercel Dashboard → Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - Vercel automatically provisions SSL certificate

### 4) Monitor Your App

- **Vercel Analytics**: Track page views and performance
- **Google AI Studio Dashboard**: Monitor API usage and costs
- **MongoDB Atlas Metrics**: Track database performance
- **Clerk Dashboard**: View user signups and authentication metrics

## Common Issues & Solutions

### Development Issues

**Problem:** Port 3000 is already in use
```bash
# Solution: Use a different port
npm run dev -- -p 3001
```

**Problem:** TypeScript errors after schema changes
```bash
# Solution: Regenerate Prisma Client
npm run prisma:generate
```

**Problem:** Build fails with "Module not found"
```bash
# Solution: Clean install dependencies
rm -rf node_modules .next
npm install
npm run build
```

**Problem:** Environment variables not loading
- Ensure `.env.local` exists in project root (not in subdirectories)
- Restart dev server after changing environment variables
- Check for typos in variable names (case-sensitive!)

### Database Issues

**Problem:** "Can't reach database server"
- Check MongoDB Atlas cluster is running (not paused)
- Verify IP whitelist includes `0.0.0.0/0` or your IP
- Test connection string in MongoDB Compass
- Check for special characters in password (may need URL encoding)

**Problem:** Prisma schema out of sync
```bash
# Solution: Push schema to database
npm run prisma:push

# Or reset database (⚠️ deletes all data)
npx prisma db push --force-reset
```

**Problem:** "Authentication failed" on connection
- Verify database username and password
- Check DATABASE_URL format: `mongodb+srv://username:password@cluster.net/dbname`
- Special characters in password need URL encoding (`@` → `%40`, `#` → `%23`)

### Clerk Authentication Issues

**Problem:** "Invalid publishable key"
- Verify you're using the correct environment key (test vs. production)
- Check key is set in `.env.local` with correct variable name
- Restart dev server after adding keys

**Problem:** Redirect loops or "not authorized"
- Clear browser cookies and cache
- Check Clerk Dashboard → Settings → Paths match your routes
- Verify `CLERK_SECRET_KEY` is correct

**Problem:** "User not found in database" after sign in
- The app creates users automatically on first sign in
- Check MongoDB to verify user was created
- Look for errors in console during sign-in flow

### RSS Feed Issues

**Problem:** "Invalid RSS feed URL"
- Verify URL returns valid RSS/Atom XML
- Test URL in RSS feed validator: [W3C Feed Validator](https://validator.w3.org/feed/)
- Some sites block automated requests (check User-Agent)

**Problem:** Feed won't refresh
- Check `lastFetched` timestamp in database
- Feeds only refresh if older than 3 hours (by design)
- For testing, manually update `lastFetched` to an old date

**Problem:** No articles after adding feed
- Some feeds don't include full content (only summaries)
- Check feed URL actually has articles
- Verify date range includes article publication dates

### Google Gemini Generation Issues

**Problem:** "Google API key not configured" or "Invalid Google API key"
- Verify key starts with `AIzaSy`
- Check you copied the entire key (they're long!)
- Ensure `GOOGLE_GENERATIVE_AI_API_KEY` is set in your `.env.local` file
- Restart your dev server after adding the environment variable
- Get your API key from [Google AI Studio](https://aistudio.google.com/apikey)

**Problem:** Rate limit errors or quota exceeded
- Google Gemini has rate limits based on your account tier
- Free tier: Check your quota limits in Google AI Studio
- Wait for rate limit to reset or upgrade your quota
- Check usage in Google AI Studio Dashboard → Usage & Limits

**Problem:** "Invalid model name" or model not available
- Verify you're using a valid model name (e.g., `gemini-2.5-pro`, `gemini-1.5-pro`, `gemini-1.5-flash`)
- Some models may not be available in all regions
- Check model availability at [Google AI Studio](https://aistudio.google.com)
- If `gemini-2.5-pro` is not available, try `gemini-1.5-pro` or `gemini-1.5-flash`

**Problem:** Newsletter generation fails or returns gibberish
- Verify you're using a supported Gemini model
- Check you have access to the model in your Google AI Studio account
- Ensure articles were fetched correctly (check database)
- Check server logs for detailed error messages

**Problem:** Streaming doesn't work
- Check browser console for errors
- Verify the AI SDK hook is properly initialized
- Ensure network connectivity to the API endpoint
- Disable browser extensions that might block streaming

### Deployment Issues

**Problem:** Build succeeds locally but fails on Vercel
- Check Node.js version matches (Vercel uses Node 18 by default)
- Verify all dependencies are in `package.json` (not just `devDependencies`)
- Check for environment-specific code that breaks in production

**Problem:** Environment variables not working in production
- Re-check all variables are added in Vercel Dashboard
- Make sure no trailing spaces in variable values
- Redeploy after adding/updating environment variables

**Problem:** "Internal Server Error" in production
- Check Vercel Function Logs for detailed errors
- Verify DATABASE_URL is production cluster (not localhost)
- Check GOOGLE_GENERATIVE_AI_API_KEY is set in Vercel environment variables
- Ensure the API key is valid for production use

## 🏆 Take It Further - Challenge Time!

### Advanced Features to Build

#### Email Integration & Automation
- **Email Provider Integration**: Connect with Mailchimp, SendGrid, or ConvertKit APIs
  - Auto-send newsletters to subscriber lists
  - Schedule newsletters for specific times
  - Track open rates and click-through rates
- **Email Templates**: Create customizable email templates with drag-and-drop
  - Save templates for reuse
  - A/B test different formats
  - Mobile-responsive designs
- **Subscriber Management**: Build your own subscriber database
  - Import/export subscriber lists
  - Manage unsubscribes and preferences
  - Segment audiences by interests

#### Analytics & Insights
- **Newsletter Analytics Dashboard**: Track performance metrics
  - Views, shares, and engagement
  - Most popular articles and topics
  - Best performing titles and subject lines
- **RSS Feed Analytics**: Understand your sources
  - Which feeds generate most engagement
  - Article freshness and frequency
  - Content overlap detection
- **User Behavior Tracking**: Learn from your audience
  - Peak generation times
  - Preferred newsletter formats
  - Popular date ranges and cadences

#### Scheduling & Automation
- **Newsletter Scheduler**: Set up recurring newsletters
  - Weekly/monthly automatic generation
  - Cron jobs for background processing
  - Email notifications when ready
- **Smart Timing**: AI-powered optimal send times
  - Analyze audience engagement patterns
  - Recommend best times to send
  - Timezone-aware scheduling
- **Workflow Automation**: Create custom workflows
  - Auto-generate → review → send pipeline
  - Approval workflows for teams
  - Trigger newsletters on feed updates

#### Team & Collaboration
- **Team Workspaces**: Multi-user collaboration
  - Invite team members with role-based access
  - Editor, reviewer, and admin roles
  - Shared RSS feeds and templates
- **Commenting & Review**: Collaborative editing
  - Comment on draft newsletters
  - Request changes and approvals
  - Version history and rollback
- **Brand Management**: Multi-brand support
  - Manage multiple newsletters/brands
  - Separate RSS feeds per brand
  - Custom branding per newsletter

### AI Improvements & Innovation

#### Enhanced AI Capabilities
- **Custom AI Models**: Fine-tune models on your content
  - Train on past successful newsletters
  - Learn your brand voice automatically
  - Personalized writing style matching
- **Multi-Model Support**: Try different AI providers
  - Anthropic Claude for longer context
  - Llama 3 for cost-effective generation
  - Compare outputs side-by-side
- **Advanced Prompting**: Sophisticated generation
  - Industry-specific prompt templates
  - Tone adjustment sliders (formal ↔ casual)
  - Length control (brief, standard, detailed)

#### Intelligent Content Curation
- **Topic Clustering**: Group similar articles automatically
  - Use embeddings to find related content
  - Create themed newsletter sections
  - Detect trending topics across feeds
- **Sentiment Analysis**: Understand article tone
  - Categorize by positive/negative/neutral
  - Balance newsletter emotional tone
  - Flag controversial content
- **Quality Scoring**: Rank articles by relevance
  - Score articles based on user preferences
  - Prioritize high-quality sources
  - Filter out low-value content

#### Smart Personalization
- **Audience Segmentation**: AI-powered targeting
  - Generate different versions for different audiences
  - Personalize content based on interests
  - Dynamic sections per subscriber
- **Content Recommendations**: Suggest RSS feeds
  - Analyze current feeds to recommend similar ones
  - Discover trending sources in your industry
  - Auto-suggest based on newsletter performance
- **Predictive Analytics**: Forecast engagement
  - Predict which topics will perform best
  - Suggest optimal newsletter length
  - Recommend publish times

#### Image & Media Generation
- **AI Image Generation**: Create newsletter graphics
  - Generate featured images with DALL-E or Stable Diffusion
  - Create consistent brand imagery
  - Auto-generate social media previews
- **Smart Image Selection**: Choose best article images
  - Extract and rank images from articles
  - AI-powered crop and resize
  - Generate alt text automatically
- **Video Summaries**: Create video content
  - Text-to-speech newsletter summaries
  - Auto-generate YouTube descriptions
  - Video newsletter format option

#### Advanced Language Features
- **Multi-Language Support**: Generate in any language
  - Translate newsletters automatically
  - Multi-lingual RSS feed support
  - Locale-specific formatting
- **SEO Optimization**: Make newsletters discoverable
  - Generate SEO-friendly titles
  - Create meta descriptions
  - Keyword optimization suggestions
- **Accessibility Features**: Make content accessible
  - Alt text for all images
  - Screen reader optimization
  - WCAG compliance checking

### Infrastructure & Scale

#### Performance Optimization
- **Edge Functions**: Deploy closer to users
  - Use Vercel Edge Runtime for faster responses
  - Reduce latency globally
  - Cache static content on CDN
- **Database Optimization**: Handle thousands of users
  - Implement read replicas
  - Add Redis for caching
  - Optimize expensive queries
- **Background Jobs**: Move work to background
  - Queue-based RSS fetching (Bull, BullMQ)
  - Async newsletter generation
  - Scheduled cleanup tasks

#### Monitoring & Observability
- **Error Tracking**: Catch bugs before users do
  - Integrate Sentry or Rollbar
  - Real-time error notifications
  - Performance monitoring
- **Logging & Tracing**: Understand system behavior
  - Structured logging with Pino
  - Request tracing across services
  - Database query profiling
- **Health Checks**: Ensure system reliability
  - API endpoint health monitoring
  - Database connection checks
  - Third-party service status

### Monetization Features

#### Advanced Pricing Tiers
- **Enterprise Plan**: For large teams
  - White-label options
  - Custom integrations
  - Dedicated support
- **Usage-Based Pricing**: Pay for what you use
  - Charge per newsletter generated
  - API access tiers
  - Storage limits and overages
- **Affiliate Program**: Let users earn
  - Referral tracking system
  - Commission payouts
  - Promotional materials

#### Marketplace
- **Template Marketplace**: Buy/sell templates
  - Community-created templates
  - Premium template store
  - Revenue sharing with creators
- **Integration Store**: Third-party integrations
  - Pre-built connector plugins
  - Zapier/Make.com integration
  - API access for developers

## 📄 License & Commercial Use

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)**.

### What This Means:

✅ **You CAN:**
- Use this code for personal learning and experimentation
- Modify and build upon it for educational purposes
- Showcase it in your portfolio with proper attribution
- Share it with others (with attribution)

❌ **You CANNOT:**
- Use this code for commercial purposes without permission
- Sell or redistribute this code commercially
- Remove attribution to Sonny Sangha and PAPAFAM

### 📧 Commercial Licensing

Want to use this commercially? Contact us at **team@papareact.com** for licensing options.

**For full license details, see [LICENSE.md](LICENSE.md)**

---

## Support

For support, email team@papareact.com

Built with ❤️ for the PAPAFAM

---

## Quick Reference

### Useful Commands

```bash
# Development
npm run dev                 # Start development server
npm run build              # Build for production
npm run start              # Start production server

# Database
npm run prisma:generate    # Generate Prisma Client types
npm run prisma:push        # Sync schema with database
npm run prisma:studio      # Open database browser

# Code Quality
npm run lint               # Check code quality
npm run format             # Format code with Biome
```

### Key Files & Folders

```
/actions                   # Server actions (database operations)
  ├── generate-newsletter.ts   # AI newsletter generation logic
  ├── rss-feed.ts              # RSS feed management
  ├── rss-article.ts           # Article deduplication
  └── user-settings.ts         # User preferences

/app                       # Next.js App Router pages
  ├── api/newsletter/                   # Newsletter API endpoints
  │   ├── generate-stream/              # AI SDK streaming endpoint
  │   └── prepare/                      # Pre-generation metadata endpoint
  ├── dashboard/                        # Protected dashboard pages
  └── page.tsx                          # Landing page

/components                # React components
  ├── dashboard/                # Dashboard UI components
  └── landing/                  # Landing page sections

/lib                       # Utilities and helpers
  ├── newsletter/prompt-builder.ts    # AI prompt construction
  ├── rss/parser.ts                   # RSS feed parser
  ├── rss/feed-refresh.ts             # Caching logic
  └── prisma.ts                       # Database client

/prisma
  └── schema.prisma         # Database schema definition
```

### Important Concepts

**RSS Feed Caching**: Feeds are only refreshed if last fetched > 3 hours ago (by ANY user)

**Article Deduplication**: Articles identified by GUID, stored once, referenced by multiple feeds

**Streaming Generation**: Newsletter content streams in real-time using the Vercel AI SDK

**Pro Features**: Newsletter history and unlimited feeds require Pro plan (managed by Clerk)

---


*For detailed technical documentation about the RSS system architecture, see [RSS-SYSTEM.md](RSS-SYSTEM.md)*
