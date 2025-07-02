/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['demo.sirv.com', 'via.placeholder.com', 'upload.wikimedia.org', 'picsum.photos'], // add other domains as needed
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '157.230.240.97',
                port: '8888',
                pathname: '/storage/media/**',
            },
        ],
    },

    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
