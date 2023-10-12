/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects(){
        return [
            {
                source:'/redirectTestnet',
                destination:'https://testnet.mynearwallet.com/create',
                permanent:false,
                basePath:false
            },
            {
                source:'/redirectMainnet',
                destination:'https://app.mynearwallet.com/create',
                permanent:false,
                basePath:false
            },
        ]
    }
}

module.exports = nextConfig
