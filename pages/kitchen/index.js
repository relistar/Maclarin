import React from "react"
import Layout from "../../components/Layout";
import {Box, Flex} from "rebass";
import theme from "../../shared/theme";
import Button from "../../components/Button";

import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
    Navigation
} from 'swiper/core';

SwiperCore.use([Navigation]);

export default function Kitchen() {
    return (
        <Layout title={'Кухня'} showHeaderButton>
            <Flex theme={theme} variant={'kitchen'} flexDirection={'column'}>
                <Flex theme={theme} variant={'swiper'} justifyContent='center'>
                    <Box theme={theme} variant={'swiper.view'}>
                        <Box theme={theme} variant={'swiper.view.title'}>
                            Новые заказы
                        </Box>
                        <Swiper
                            slidesPerView='auto'
                            navigation
                            spaceBetween={20}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(el => (
                                <SwiperSlide key={el}>
                                    <Box theme={theme} variant={'swiper.view.slide'}>
                                        <Button variant="primary" size="small">12345</Button>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Flex>
                <Flex theme={theme} variant={'swiper'} justifyContent='center'>
                    <Box theme={theme} variant={'swiper.view'}>
                        <Box theme={theme} variant={'swiper.view.title'}>
                            Ожидание печи
                        </Box>
                        <Swiper
                            slidesPerView='auto'
                            navigation
                            spaceBetween={20}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(el => (
                                <SwiperSlide key={el}>
                                    <Box theme={theme} variant={'swiper.view.slide'}>
                                        <Button variant="primary" size="small">12345</Button>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Flex>
                <Flex theme={theme} variant={'swiper'} justifyContent='center'>
                    <Box theme={theme} variant={'swiper.view'}>
                        <Box theme={theme} variant={'swiper.view.title'}>
                            В печи
                        </Box>
                        <Swiper
                            slidesPerView='auto'
                            navigation
                            spaceBetween={20}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(el => (
                                <SwiperSlide key={el}>
                                    <Box theme={theme} variant={'swiper.view.slide'}>
                                        <Button variant="primary" size="small">12345</Button>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Flex>
                <Flex theme={theme} variant={'swiper'} justifyContent='center'>
                    <Box theme={theme} variant={'swiper.view'}>
                        <Box theme={theme} variant={'swiper.view.title'}>
                            Готово к выдаче
                        </Box>
                        <Swiper
                            slidesPerView='auto'
                            navigation
                            spaceBetween={20}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(el => (
                                <SwiperSlide key={el}>
                                    <Box theme={theme} variant={'swiper.view.slide'}>
                                        <Button variant="primary" size="small">12345</Button>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Flex>
            </Flex>
        </Layout>
    )
}