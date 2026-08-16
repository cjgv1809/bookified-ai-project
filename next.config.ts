import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: "100mb",
        },
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "covers.openlibrary.org" },
            {
                protocol: "https",
                hostname: "u0jy8xyrcmpxn2vz.public.blob.vercel-storage.com",
            },
        ],
    },
};

export default nextConfig;
