# Bookified

Bookified is an AI-powered platform that lets you have real-time voice conversations with your books. Upload a PDF, choose an AI voice persona, and talk through the content out loud — ask questions, request summaries, and keep a full transcript of every session.

**Live app:** [bookified-ai-project.vercel.app](https://bookified-ai-project.vercel.app)

## Table of Contents

1. [Tech Stack](#tech-stack)
2. [Features](#features)
3. [Quick Start](#quick-start)

## <a name="tech-stack">Tech Stack</a>

- **[Next.js](https://nextjs.org/docs)** — React framework handling the app router, server actions, and API routes.
- **[Clerk](https://clerk.com/docs)** — authentication and subscription billing (Free / Standard / Pro plans).
- **[MongoDB](https://www.mongodb.com/docs/)** with Mongoose — stores user libraries, book metadata, and voice session records.
- **[Vercel Blob](https://vercel.com/docs/storage/vercel-blob)** — stores uploaded PDFs and generated book covers.
- **[Vapi](https://docs.vapi.ai/)** — real-time voice AI orchestration for the reading conversations.
- **[ElevenLabs](https://elevenlabs.io/docs)** — text-to-speech voice personas used during conversations.
- **[Tailwind CSS](https://tailwindcss.com/)** + **[Shadcn UI](https://ui.shadcn.com/)** / Radix primitives — UI components and styling.
- **[Motion](https://motion.dev/)** — page transitions and interaction animations.
- **TypeScript** throughout.

## <a name="features">Features</a>

- **PDF upload** — extract text and generate a cover image from any uploaded PDF, chunked into segments for the voice assistant's context.
- **Voice conversations** — real-time, back-and-forth voice dialogue about the uploaded book via Vapi.
- **AI voice personas** — pick from multiple ElevenLabs voices with instant previews before starting a session.
- **Session transcripts** — every conversation is captured as a live, scrollable text transcript.
- **Library management** — search, browse, and delete uploaded books.
- **Auth & subscriptions** — email/social sign-in via Clerk, with Free/Standard/Pro plans gating session count, session length, and library size.
- **Light/dark theme** with a circular view-transition toggle.

## <a name="quick-start">Quick Start</a>

**Prerequisites**

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Clone and install**

```bash
git clone https://github.com/cjgv1809/bookified-ai-project.git
cd bookified-ai-project
npm install
```

**Environment variables**

Create a `.env` file in the project root:

```env
NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=

# CLERK — https://clerk.com → create app → API Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# VERCEL BLOB — https://vercel.com/dashboard → Storage → create a Blob store
bookified_READ_WRITE_TOKEN=

# MONGODB — https://mongodb.com/cloud/atlas, free tier is fine
MONGODB_URI=

# VAPI — https://vapi.ai
NEXT_PUBLIC_VAPI_API_KEY=
VAPI_SERVER_SECRET=
NEXT_PUBLIC_ASSISTANT_ID=

# Configured in Vapi's assistant dashboard, not read by this app's code directly
GOOGLE_GEMINI_API_KEY=
ELEVENLABS_API_KEY=
```

Get credentials by signing up at [Clerk](https://clerk.com), [Vercel](https://vercel.com), [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), [Vapi](https://vapi.ai), and [ElevenLabs](https://elevenlabs.io).

**Run locally**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Other scripts**

```bash
npm run lint # ESLint
npm run format # Prettier, write
npm run format:check # Prettier, check only
npm run build # production build
```
