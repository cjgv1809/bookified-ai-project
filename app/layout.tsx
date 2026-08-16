import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { CLERK_AUTH_APPEARANCE_OVERRIDE } from "@/lib/constants";

const ibmPlexSerif = IBM_Plex_Serif({
    variable: "--font-ibm-plex-serif",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const monaSans = Mona_Sans({
    variable: "--font-mona-sans",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Bookified",
    description:
        "Transform your books into interactive AI conversations. Upload PDFs, and chat with your books using voice.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider appearance={CLERK_AUTH_APPEARANCE_OVERRIDE}>
            <html lang="en" suppressHydrationWarning>
                <body
                    className={`${ibmPlexSerif.variable} ${monaSans.variable} relative font-sans antialiased`}
                >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                    >
                        <Navbar />
                        <PageTransition>{children}</PageTransition>
                        <Toaster />
                    </ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
