const BookVoiceIllustration = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 320 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            {/* Sound waves rising from the book */}
            <path
                d="M160 78 C 160 60, 160 46, 160 32"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.9"
            />
            <path
                d="M138 82 C 132 62, 132 44, 140 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
            />
            <path
                d="M182 82 C 188 62, 188 44, 180 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.55"
            />
            <path
                d="M116 90 C 104 66, 106 40, 120 16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                opacity="0.3"
            />
            <path
                d="M204 90 C 216 66, 214 40, 200 16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                opacity="0.3"
            />

            {/* Open book silhouette */}
            <path
                d="M50 185 C 50 130 95 96 156 100 L156 190 C 110 178 70 178 50 185 Z"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M270 185 C 270 130 225 96 164 100 L164 190 C 210 178 250 178 270 185 Z"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M156 100 C 158 130 158 165 156 190"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                opacity="0.7"
            />
            <path
                d="M164 100 C 162 130 162 165 164 190"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                opacity="0.7"
            />

            {/* Text lines on the left page */}
            <path
                d="M70 140 L 138 128"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
            />
            <path
                d="M68 155 L 140 145"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
            />
            <path
                d="M67 170 L 141 162"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
            />

            {/* Text lines on the right page */}
            <path
                d="M182 128 L 250 140"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
            />
            <path
                d="M180 145 L 252 155"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
            />
            <path
                d="M179 162 L 253 170"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.4"
            />

            {/* Base line the book rests on */}
            <path
                d="M30 200 C 100 212 220 212 290 200"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.2"
            />
        </svg>
    );
};

export default BookVoiceIllustration;
