// Brand color - used in JS files where CSS variables aren't available
export const BRAND_COLOR = "#212a3b"; // Dark blue-gray
export const BRAND_COLOR_HOVER = "#3d485e"; // Medium blue-gray

// Sample books for the homepage (cover art only, self-hosted from Open Library's
// public covers API - not the book content itself).
export const sampleBooks = [
    {
        _id: "1",
        title: "Clean Code",
        author: "Robert Cecil Martin",
        slug: "clean-code",
        coverURL: "/assets/covers/clean-code.jpg",
        coverColor: "#f8f4e9",
    },
    {
        _id: "2",
        title: "JavaScript: The Definitive Guide",
        author: "David Flanagan",
        slug: "javascript-the-definitive-guide",
        coverURL: "/assets/covers/javascript-the-definitive-guide.jpg",
        coverColor: "#f8f4e9",
    },
    {
        _id: "3",
        title: "Brave New World",
        author: "Aldous Huxley",
        slug: "brave-new-world",
        coverURL: "/assets/covers/brave-new-world.jpg",
        coverColor: "#f8f4e9",
    },
    {
        _id: "4",
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        slug: "rich-dad-poor-dad",
        coverURL: "/assets/covers/rich-dad-poor-dad.jpg",
        coverColor: "#f8f4e9",
    },
    {
        _id: "5",
        title: "Deep Work",
        author: "Cal Newport",
        slug: "deep-work",
        coverURL: "/assets/covers/deep-work.jpg",
        coverColor: "#f8f4e9",
    },
    {
        _id: "6",
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        slug: "how-to-win-friends-and-influence-people",
        coverURL: "/assets/covers/how-to-win-friends-and-influence-people.jpg",
        coverColor: "#f8f4e9",
    },
    {
        _id: "7",
        title: "The Power of Habit",
        author: "Charles Duhigg",
        slug: "the-power-of-habit",
        coverURL: "/assets/covers/the-power-of-habit.jpg",
        coverColor: "#f8f4e9",
    },
    {
        _id: "8",
        title: "Atomic Habits",
        author: "James Clear",
        slug: "atomic-habits",
        coverURL: "/assets/covers/atomic-habits.jpg",
        coverColor: "#f8f4e9",
    },
    {
        _id: "9",
        title: "The Courage to Be Disliked",
        author: "Fumitake Koga & Ichiro Kishimi",
        slug: "the-courage-to-be-disliked",
        coverURL: "/assets/covers/the-courage-to-be-disliked.jpg",
        coverColor: "#f8f4e9",
    },
    {
        _id: "10",
        title: "1984",
        author: "George Orwell",
        slug: "1984",
        coverURL: "/assets/covers/1984.jpg",
        coverColor: "#f8f4e9",
    },
];

// File validation helpers
export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
export const ACCEPTED_PDF_TYPES = ["application/pdf"];
export const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
export const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

// Pre-configured VAPI assistant ID (hardcoded for this app)
export const ASSISTANT_ID = process.env.NEXT_PUBLIC_ASSISTANT_ID!;

// 11Labs Voice IDs - Optimized for conversational AI
// Voices selected for natural, engaging book conversations
export const voiceOptions = {
    // Male voices
    dave: {
        id: "CYw3kZ02Hs0563khs1Fj",
        name: "Dave",
        description: "Young male, British-Essex, casual & conversational",
    },
    daniel: {
        id: "onwK4e9ZLuTAKqWW03F9",
        name: "Daniel",
        description: "Middle-aged male, British, authoritative but warm",
    },
    chris: {
        id: "iP95p4xoKVk53GoZ742B",
        name: "Chris",
        description: "Male, casual & easy-going",
    },
    // Female voices
    rachel: {
        id: "21m00Tcm4TlvDq8ikWAM",
        name: "Rachel",
        description: "Young female, American, calm & clear",
    },
    sarah: {
        id: "EXAVITQu4vr4xnSDxMaL",
        name: "Sarah",
        description: "Young female, American, soft & approachable",
    },
};

// Voice categories for the selector UI
export const voiceCategories = {
    male: ["dave", "daniel", "chris"],
    female: ["rachel", "sarah"],
};

// Default voice
export const DEFAULT_VOICE = "rachel";

// ElevenLabs voice settings optimized for conversational AI
export const VOICE_SETTINGS = {
    stability: 0.45, // Lower for more emotional, dynamic delivery (0.30-0.50 is natural)
    similarityBoost: 0.75, // Enhances clarity without distortion
    style: 0, // Keep at 0 for conversational AI (higher = more latency, less stable)
    useSpeakerBoost: true, // Improves voice quality
    speed: 1.0, // Natural conversation speed
};

// VAPI configuration for natural conversation
// NOTE: These settings should be configured in the VAPI Dashboard for the assistant
// They are kept here for reference and documentation purposes
export const VAPI_DASHBOARD_CONFIG = {
    // Turn-taking settings
    startSpeakingPlan: {
        smartEndpointingEnabled: true,
        waitSeconds: 0.4,
    },
    stopSpeakingPlan: {
        numWords: 2,
        voiceSeconds: 0.2,
        backoffSeconds: 1.0,
    },
    // Timing settings
    silenceTimeoutSeconds: 30,
    responseDelaySeconds: 0.4,
    llmRequestDelaySeconds: 0.1,
    // Conversation features
    backgroundDenoisingEnabled: true,
    backchannelingEnabled: true,
    fillerInjectionEnabled: false,
};

// Clerk appearance overrides - Modern Ink Style
// Uses CSS custom properties (not raw hex) so the sign-in modal follows light/dark mode automatically.
export const CLERK_AUTH_APPEARANCE_OVERRIDE = {
    elements: {
        rootBox: "mx-auto",
        card: "shadow-none !border-none rounded-2xl !bg-none !bg-[var(--bg-card)]",
        headerTitle: "!text-2xl font-semibold !text-[var(--text-primary)]",
        headerSubtitle: "!mt-3 !text-sm !text-[var(--text-secondary)]",
        socialButtonsBlockButton:
            "!border !border-[var(--border-subtle)] !bg-none !bg-[var(--bg-card)] hover:!bg-[var(--bg-secondary)] transition-all h-12 text-base !rounded-full shadow-[var(--shadow-soft-sm)]",
        socialButtonsBlockButtonText:
            "font-medium !text-[var(--text-primary)] !text-base",
        formButtonPrimary:
            "!bg-[var(--accent-warm)] hover:!bg-[var(--accent-warm-hover)] !text-[var(--primary-foreground)] font-medium !border-0 shadow-[var(--shadow-soft-sm)] normal-case !h-12 !text-base !rounded-full",
        formFieldInput:
            "!border !border-[var(--border-subtle)] !rounded-[var(--radius)] focus:ring-[var(--accent-warm)] focus:border-[var(--accent-warm)] !h-12 !min-h-12 !text-base !bg-[var(--bg-card)] !text-[var(--text-primary)] shadow-[var(--shadow-soft-sm)]",
        formFieldLabel: "!text-[var(--text-primary)] font-medium text-base",
        footerActionLink:
            "!text-[var(--accent-warm)] hover:!text-[var(--accent-warm-hover)] text-sm font-medium",
        footerActionText: "!text-[var(--text-secondary)]",
        footer: "!bg-none !bg-[var(--bg-secondary)]",
        dividerLine: "!bg-[var(--border-subtle)]",
        dividerText: "!text-[var(--text-muted)]",
        modalBackdrop: "!bg-black/50 backdrop-blur-sm",
        modalContent: "!bg-none !bg-[var(--bg-card)]",
        identityPreviewText: "!text-[var(--text-primary)]",
        identityPreviewEditButton: "!text-[var(--accent-warm)]",
        formFieldAction: "!text-[var(--accent-warm)]",
        otpCodeFieldInput:
            "!border !border-[var(--border-subtle)] !bg-[var(--bg-card)] !text-[var(--text-primary)]",
    },
};
