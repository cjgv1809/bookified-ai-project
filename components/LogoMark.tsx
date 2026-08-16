const LogoMark = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 46 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            {/* Open book */}
            <path
                d="M3 21 C3 11 8.5 6.5 15.5 7.5 L15.5 20.5 C11 18.5 6.5 18.5 3 21 Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M28 21 C28 11 22.5 6.5 15.5 7.5 L15.5 20.5 C20 18.5 24.5 18.5 28 21 Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
                fill="none"
            />

            {/* Sound waves */}
            <path
                d="M32 10 A 4.5 4.5 0 0 1 32 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.9"
            />
            <path
                d="M36 6.5 A 8 8 0 0 1 36 21.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.55"
            />
            <path
                d="M40 3.5 A 11.5 11.5 0 0 1 40 24.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.3"
            />
        </svg>
    );
};

export default LogoMark;
