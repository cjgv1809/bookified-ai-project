"use client";

import { motion, useReducedMotion } from "motion/react";
import { Loader2 } from "lucide-react";

const LoadingOverlay = () => {
    const reduce = useReducedMotion();

    return (
        <motion.div
            className="loading-wrapper"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <motion.div
                className="loading-shadow-wrapper bg-[var(--bg-card)] shadow-soft-lg"
                initial={reduce ? undefined : { opacity: 0, scale: 0.95 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="loading-shadow">
                    <Loader2 className="loading-animation w-12 h-12 text-[var(--accent-warm)]" />
                    <h2 className="loading-title">Synthesizing Your Book</h2>
                    <p className="text-[var(--text-secondary)] text-center max-w-xs">
                        Please wait while we process your PDF and prepare your
                        interactive literary experience.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default LoadingOverlay;
