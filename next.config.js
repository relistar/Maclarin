const withPWA = require('next-pwa')

module.exports = withPWA({
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://afanapi.dev-tadoit.ru/api/v1/:path*' // Proxy to Backend
            }
        ]
    },
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        sw: 'service-worker.js'
    }
})
