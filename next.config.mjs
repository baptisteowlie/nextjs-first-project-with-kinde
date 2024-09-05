/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        //domains: ['bytegrad.com'],
        remotePatterns: [
            {protocol: 'https',
            hostname: '**'}
        ]
    },
};

export default nextConfig;
