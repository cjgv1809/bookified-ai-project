"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
import BookVoiceIllustration from "@/components/BookVoiceIllustration";

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.05 } },
};

const item = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    },
};

const HeroSection = () => {
    const reduce = useReducedMotion();

    return (
        <section className="wrapper mb-10 md:mb-16">
            <div className="library-hero-card">
                <div className="library-hero-content">
                    {/* Left Part */}
                    <motion.div
                        className="library-hero-text"
                        variants={reduce ? undefined : container}
                        initial={reduce ? undefined : "hidden"}
                        animate={reduce ? undefined : "show"}
                    >
                        <motion.h1
                            variants={reduce ? undefined : item}
                            className="library-hero-title"
                        >
                            Your Library
                        </motion.h1>
                        <motion.p
                            variants={reduce ? undefined : item}
                            className="library-hero-description"
                        >
                            Convert your books into interactive AI
                            conversations. Listen, learn, and discuss your
                            favorite reads.
                        </motion.p>
                        <motion.div variants={reduce ? undefined : item}>
                            <Link
                                href="/books/new"
                                className="library-cta-primary"
                            >
                                <Plus className="size-5" strokeWidth={2} />
                                <span>Add new book</span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Center Part - Desktop */}
                    <motion.div
                        className="library-hero-illustration-desktop text-[var(--text-primary)]"
                        initial={
                            reduce ? undefined : { opacity: 0, scale: 0.94 }
                        }
                        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <BookVoiceIllustration className="w-full h-full max-w-[320px]" />
                    </motion.div>

                    {/* Center Part - Mobile (Hidden on Desktop) */}
                    <div className="library-hero-illustration text-[var(--text-primary)]">
                        <BookVoiceIllustration className="w-[220px] h-[220px]" />
                    </div>

                    {/* Right Part */}
                    <motion.div
                        className="library-steps-card min-w-[260px] max-w-[280px] z-10"
                        variants={reduce ? undefined : container}
                        initial={reduce ? undefined : "hidden"}
                        animate={reduce ? undefined : "show"}
                    >
                        <ul className="space-y-5">
                            {[
                                {
                                    title: "Upload PDF",
                                    description: "Add your book file",
                                },
                                {
                                    title: "AI Processing",
                                    description: "We analyze the content",
                                },
                                {
                                    title: "Voice Chat",
                                    description: "Discuss with AI",
                                },
                            ].map((step, index) => (
                                <motion.li
                                    variants={reduce ? undefined : item}
                                    key={step.title}
                                    className="library-step-item"
                                >
                                    <div className="library-step-number">
                                        {index + 1}
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="library-step-title">
                                            {step.title}
                                        </h2>
                                        <p className="library-step-description">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
