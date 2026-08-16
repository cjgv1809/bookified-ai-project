import Image from "next/image";

interface SampleBookCardProps {
    title: string;
    author: string;
    coverURL: string;
}

const SampleBookCard = ({ title, author, coverURL }: SampleBookCardProps) => (
    <article className="book-card sample-book-card">
        <div className="book-card-cover-wrapper">
            <Image
                src={coverURL}
                alt={title}
                width={133}
                height={200}
                className="book-card-cover"
            />
            <span className="sample-book-card-badge">Example</span>
        </div>

        <div className="book-card-meta">
            <h3 className="book-card-title">{title}</h3>
            <p className="book-card-author">{author}</p>
        </div>
    </article>
);

export default SampleBookCard;
