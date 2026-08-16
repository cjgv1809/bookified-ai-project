"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
    useUser,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import LogoMark from "@/components/LogoMark";

const navItems = [
    { label: "Library", href: "/" },
    { label: "Add New", href: "/books/new" },
    { label: "Pricing", href: "/subscriptions" },
];

const ThemeToggle = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const reduce = useReducedMotion();

    // Deliberate SSR-hydration gate (the standard next-themes pattern): resolvedTheme
    // is unknown until after the client mounts, so this defers rendering the
    // theme-dependent icon by one tick rather than synchronizing with an external
    // system, which is what react-hooks/set-state-in-effect is meant to catch.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="size-9" />;

    const isDark = resolvedTheme === "dark";

    const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
        const next = isDark ? "light" : "dark";

        if (reduce || typeof document.startViewTransition !== "function") {
            setTheme(next);
            return;
        }

        const { left, top, width, height } =
            event.currentTarget.getBoundingClientRect();
        document.documentElement.style.setProperty(
            "--theme-x",
            `${left + width / 2}px`,
        );
        document.documentElement.style.setProperty(
            "--theme-y",
            `${top + height / 2}px`,
        );

        document.startViewTransition(() => setTheme(next));
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="nav-theme-toggle"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <motion.span
                key={isDark ? "sun" : "moon"}
                initial={reduce ? undefined : { rotate: -90, opacity: 0 }}
                animate={reduce ? undefined : { rotate: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex"
            >
                {isDark ? (
                    <Sun className="size-[18px]" strokeWidth={1.75} />
                ) : (
                    <Moon className="size-[18px]" strokeWidth={1.75} />
                )}
            </motion.span>
        </button>
    );
};

const NavLinks = ({
    pathName,
    onNavigate,
    className,
}: {
    pathName: string;
    onNavigate?: () => void;
    className?: string;
}) => (
    <>
        {navItems.map(({ label, href }) => {
            const isActive =
                pathName === href ||
                (href !== "/" && pathName.startsWith(href));

            return (
                <Link
                    href={href}
                    key={label}
                    onClick={onNavigate}
                    className={cn(
                        "nav-link-base relative",
                        className,
                        isActive
                            ? "nav-link-active"
                            : "hover:text-[var(--text-primary)]",
                    )}
                >
                    {label}
                    {isActive && (
                        <motion.span
                            layoutId="nav-active-indicator"
                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--text-primary)] rounded-full"
                            transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 32,
                            }}
                        />
                    )}
                </Link>
            );
        })}
    </>
);

const Navbar = () => {
    const pathName = usePathname();
    const { user } = useUser();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const reduce = useReducedMotion();

    // Close the mobile menu when the route changes. Adjusting state during render
    // (React's documented pattern for "reset state when a prop changes") rather than
    // in a useEffect avoids an extra render pass after navigation.
    const [prevPathName, setPrevPathName] = useState(pathName);
    if (pathName !== prevPathName) {
        setPrevPathName(pathName);
        setMobileMenuOpen(false);
    }

    return (
        <header className="w-full fixed z-50 bg-(--bg-primary)/90 backdrop-blur-md border-b border-[var(--border-subtle)]">
            <div className="wrapper navbar-height py-4 flex justify-between items-center">
                <Link
                    href="/"
                    className="flex gap-2 items-center text-[var(--text-primary)]"
                >
                    <LogoMark className="w-9 h-6" />
                    <span className="logo-text">Bookified</span>
                </Link>

                <nav className="w-fit flex gap-6 sm:gap-7.5 items-center">
                    <div className="hidden sm:flex gap-6 sm:gap-7.5 items-center">
                        <NavLinks pathName={pathName} />
                    </div>

                    <div className="flex gap-3 sm:gap-5 items-center">
                        <ThemeToggle />
                        <SignedOut>
                            <SignInButton mode="modal" />
                        </SignedOut>
                        <SignedIn>
                            <div className="nav-user-link">
                                <UserButton />
                                {user?.firstName && (
                                    <Link
                                        href="/subscriptions"
                                        className="nav-user-name"
                                    >
                                        {user.firstName}
                                    </Link>
                                )}
                            </div>
                        </SignedIn>

                        <div className="hidden max-sm:block">
                            <button
                                type="button"
                                onClick={() =>
                                    setMobileMenuOpen((open) => !open)
                                }
                                className="nav-theme-toggle"
                                aria-label={
                                    mobileMenuOpen ? "Close menu" : "Open menu"
                                }
                                aria-expanded={mobileMenuOpen}
                            >
                                {mobileMenuOpen ? (
                                    <X
                                        className="size-[18px]"
                                        strokeWidth={1.75}
                                    />
                                ) : (
                                    <Menu
                                        className="size-[18px]"
                                        strokeWidth={1.75}
                                    />
                                )}
                            </button>
                        </div>
                    </div>
                </nav>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={reduce ? undefined : { opacity: 0, height: 0 }}
                        animate={
                            reduce ? undefined : { opacity: 1, height: "auto" }
                        }
                        exit={reduce ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="sm:hidden overflow-hidden bg-(--bg-primary) border-b border-[var(--border-subtle)]"
                    >
                        <nav className="wrapper py-4 flex flex-col gap-1">
                            <NavLinks
                                pathName={pathName}
                                onNavigate={() => setMobileMenuOpen(false)}
                                className="!text-base py-2.5"
                            />
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
