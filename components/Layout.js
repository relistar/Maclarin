import styled from "@emotion/styled";
import Head from "next/head";
import theme from "../shared/theme";
import Header from "./Header";
import React from "react";
import Footer from "./Footer";
import {Box, Flex} from "rebass";
import Link from "./Link";
import Navbar from "./Navbar";

export default function Layout({children, title, showHeaderButton, authorized}) {
    return (
        <>
            <Head>
                <title>{title}</title>

                <meta charSet="utf-8"/>
                <meta name='viewport' content='width=device-width,initial-scale=1,maximum-scale=1'/>
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/>
                <link rel="manifest" href="/manifest.json"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                <meta name="apple-mobile-web-app-title" content="Maclarin"/>
                <meta name="application-name" content="Maclarin"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="msapplication-TileImage" content="/mstile-144x144.png"/>
                <meta name="theme-color" content="#303030"/>
            </Head>
            <Box theme={theme} variant='container'>
                <Header showButton={showHeaderButton}/>
                <Navbar showButton={showHeaderButton}/>
                {children}
                <Footer authorized={authorized}/>
            </Box>
        </>
    )
}