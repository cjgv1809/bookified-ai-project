import React from "react";
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import SampleBookCard from "@/components/SampleBookCard";
import { getAllBooks } from "@/lib/actions/book.actions";
import { sampleBooks } from "@/lib/constants";
import Search from "@/components/Search";

const Page = async ({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) => {
    const { query } = await searchParams;

    const bookResults = await getAllBooks(query);
    const books = bookResults.success ? (bookResults.data ?? []) : [];
    const showSampleBooks = books.length === 0 && !query;

    return (
        <main className="wrapper container">
            <HeroSection />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
                <h2 className="section-title">Recent Books</h2>
                <Search />
            </div>

            {showSampleBooks && (
                <p className="text-[var(--text-secondary)] mb-7 -mt-4">
                    Here&apos;s what your library could look like. Upload your
                    first book to replace these examples with real, chattable
                    books.
                </p>
            )}

            {!showSampleBooks && books.length === 0 && query && (
                <p className="text-[var(--text-secondary)]">
                    No books found for &quot;{query}&quot;.
                </p>
            )}

            <div className="library-books-grid">
                {showSampleBooks
                    ? sampleBooks.map((book) => (
                          <SampleBookCard
                              key={book._id}
                              title={book.title}
                              author={book.author}
                              coverURL={book.coverURL}
                          />
                      ))
                    : books.map((book) => (
                          <BookCard
                              key={book._id}
                              bookId={book._id}
                              title={book.title}
                              author={book.author}
                              coverURL={book.coverURL}
                              slug={book.slug}
                          />
                      ))}
            </div>
        </main>
    );
};

export default Page;
