"use client";

import Link from "next/link";
import { BookCardProps } from "@/types";
import Image from "next/image";
import {
    motion,
    useMotionValue,
    useTransform,
    useSpring,
    useReducedMotion,
} from "motion/react";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteBook } from "@/lib/actions/book.actions";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const BookCard = ({ bookId, title, author, coverURL, slug }: BookCardProps) => {
    const reduce = useReducedMotion();
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);

    const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), {
        stiffness: 300,
        damping: 28,
    });
    const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-7, 7]), {
        stiffness: 300,
        damping: 28,
    });
    const scale = useSpring(1, { stiffness: 300, damping: 28 });

    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        if (reduce || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
    };

    const handlePointerEnter = (event: React.PointerEvent<HTMLDivElement>) => {
        if (!reduce && event.pointerType === "mouse") scale.set(1.03);
    };

    const handlePointerLeave = () => {
        pointerX.set(0);
        pointerY.set(0);
        scale.set(1);
    };

    const handleDelete = async () => {
        setIsDeleting(true);
        const result = await deleteBook(bookId);

        if (result.success) {
            toast.success(`"${title}" deleted`);
            setDialogOpen(false);
            router.refresh();
        } else {
            toast.error(
                result.error ||
                    "Failed to delete book. Please try again later.",
            );
            setIsDeleting(false);
        }
    };

    return (
        <motion.div
            className="relative"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onPointerMove={handlePointerMove}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
            style={
                reduce
                    ? undefined
                    : { rotateX, rotateY, scale, transformPerspective: 700 }
            }
        >
            <Link href={`/books/${slug}`}>
                <article className="book-card">
                    <figure className="book-card-figure">
                        <div className="book-card-cover-wrapper">
                            <Image
                                src={coverURL}
                                alt={title}
                                width={133}
                                height={200}
                                className="book-card-cover"
                            />
                        </div>

                        <figcaption className="book-card-meta">
                            <h3 className="book-card-title">{title}</h3>
                            <p className="book-card-author">{author}</p>
                        </figcaption>
                    </figure>
                </article>
            </Link>

            <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <AlertDialogTrigger asChild>
                    <button
                        type="button"
                        aria-label={`Delete ${title}`}
                        className="book-card-delete-btn"
                    >
                        <Trash2 className="size-4" />
                    </button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Delete &quot;{title}&quot;?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            This permanently removes the PDF, cover, and every
                            extracted passage for this book, along with any
                            conversation history tied to it. This can&apos;t be
                            undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isDeleting}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            variant="destructive"
                            disabled={isDeleting}
                            onClick={(event) => {
                                event.preventDefault();
                                handleDelete();
                            }}
                        >
                            {isDeleting ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </motion.div>
    );
};
export default BookCard;
