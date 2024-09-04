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
console.log('KINDE_ISSUER_URL:', process.env.KINDE_ISSUER_URL);


export default nextConfig;
