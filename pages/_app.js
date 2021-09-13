import React from "react"
import {globalStyles} from '../shared/styles'
import { ThemeProvider } from '@emotion/react'
import theme from "../shared/theme";
import 'swiper/swiper-bundle.css'
import "swiper/components/scrollbar/scrollbar.min.css"

export default function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider theme={theme}>
            {globalStyles}
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
