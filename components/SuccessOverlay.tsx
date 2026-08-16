"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";

const SuccessOverlay = () => {
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
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="loading-shadow">
                    <motion.div
                        initial={reduce ? undefined : { scale: 0 }}
                        animate={reduce ? undefined : { scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 18,
                            delay: 0.1,
                        }}
                        className="flex items-center justify-center size-16 rounded-full bg-[var(--accent-warm)]"
                    >
                        <motion.div
                            initial={
                                reduce ? undefined : { opacity: 0, scale: 0.5 }
                            }
                            animate={
                                reduce ? undefined : { opacity: 1, scale: 1 }
                            }
                            transition={{
                                duration: 0.25,
                                delay: 0.3,
                                ease: "easeOut",
                            }}
                        >
                            <Check
                                className="size-8 text-[var(--primary-foreground)]"
                                strokeWidth={2.5}
                            />
                        </motion.div>
                    </motion.div>
                    <h2 className="loading-title">Book Ready</h2>
                    <p className="text-[var(--text-secondary)] text-center max-w-xs">
                        Your interactive reading experience is all set.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SuccessOverlay;
