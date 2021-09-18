const withPWA = require('next-pwa')

module.exports = withPWA({
    async rewrites() {
        return [
            {
                source: '/api/order/:orderId/delivery-price/:price',
                destination: 'https://afanapi.dev-tadoit.ru/api/v1/order/:orderId/delivery-price/?price=:price',
            },
            {
                source: '/api/:slug*',
                destination: 'https://afanapi.dev-tadoit.ru/api/v1/:slug*' // Proxy to Backend
            }
        ]
    },
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
        sw: 'service-worker.js'
    }
})
