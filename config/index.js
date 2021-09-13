export function getAPIEndpointsConfig() {
    const {
        NEXT_PUBLIC_BACKEND_API_ENDPOINT,
        NEXT_PUBLIC_FRONTEND_API_ENDPOINT,
        NEXT_PUBLIC_IS_VERCEL,
        NEXT_PUBLIC_VERCEL_APP_DOMAIN
    } = process.env

    const VERCEL_API_ENDPOINT = `https://${NEXT_PUBLIC_VERCEL_APP_DOMAIN}/api`;

    return {
        backend: NEXT_PUBLIC_BACKEND_API_ENDPOINT,
        frontend: NEXT_PUBLIC_IS_VERCEL ? VERCEL_API_ENDPOINT : NEXT_PUBLIC_FRONTEND_API_ENDPOINT
    }
}

export function getSessionCookieConfig() {
    return {
        cookieName: process.env.SESSION_COOKIE_NAME,
        password: process.env.SESSION_COOKIE_PASSWORD,
        cookieOptions: {
            secure: process.env.SESSION_COOKIE_SECURE,
            httpOnly: process.env.SESSION_COOKIE_HTTP_ONLY,
            sameSite: process.env.SESSION_COOKIE_SAME_SITE,
            maxAge: process.env.SESSION_COOKIE_MAX_AGE
        }
    }
}