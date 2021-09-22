import React, {useEffect, useState} from "react"
import Layout from "../components/Layout";
import {Box, Flex} from "rebass";
import theme from "../shared/theme";
import {ClockIcon} from "../components/Icon";
import DotsLoader from "../components/DotsLoader";
import Button from "../components/Button";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper/core';
import {withAuthServerSideProps} from "../session/withAuth";
import {applySession} from "next-iron-session";
import {options} from "../session";
import fromUnixTime from 'date-fns/fromUnixTime'
import intervalToDuration from 'date-fns/intervalToDuration'
import formatDuration from 'date-fns/formatDuration'

import ruLocale from "date-fns/locale/ru";
import {useRouter} from "next/router";

SwiperCore.use([Navigation]);

export default function Home({accessToken}) {
    const [page, setPage] = useState(null)
    const [wsInstance, setWsInstance] = useState(null)
    const [wsIntervalId, setWsIntervalId] = useState(null)

    const isBrowser = typeof window !== "undefined";
    const router = useRouter()

    /*const updateWs = useCallback((url) => {
        if(!isBrowser) return setWsInstance(null);

        // Close the old connection
        if(wsInstance?.readyState !== 3)
            wsInstance.close();

        // Create a new connection
        const newWs = new WebSocket(url);
        setWsInstance(newWs);
    }, [wsInstance])*/

    useEffect(() => {
        if (isBrowser) {
           const ws = new WebSocket(`wss://afanapi.dev-tadoit.ru/wss/operator?token=${accessToken}`);

            ws.addEventListener('open', function (event) {
                ws.send('Hello!');
            });

            ws.addEventListener('message', function (event) {
                let data = JSON.parse(event.data);
                console.log(data)
                setPage(data)
            });

            let intervalID = setInterval(function () {
                if (wsInstance?.readyState !== 3) {
                    ws.send("get q info")
                }
            }, 5000)

            setWsIntervalId(intervalID)
            setWsInstance(ws);
        }

        return () => {
            if (wsInstance && wsInstance?.readyState !== 3) {
                wsInstance.close()
            }
            if (wsIntervalId) {
                clearInterval(wsIntervalId)
                setWsIntervalId(null)
            }
        }
    }, [])

    function getTimeFrom(timerStart) {
        const interval = {
            start: fromUnixTime(+timerStart),
            end: new Date()
        }

        let duration = intervalToDuration(interval);

        for (let prop in duration) {
            if (duration[prop] === 0) {
                delete duration[prop]
            }
        }
        let objectKeys = Object.keys(duration)

        if (objectKeys.length > 1 && objectKeys.includes('seconds')) {
            delete duration['seconds']
        }

        return formatDuration(duration, {
            locale: ruLocale,
            format: ['days', 'hours', 'minutes', 'seconds']
        })
    }

    function handleGoToOrder(number) {
        if (wsInstance?.readyState !== 3) {
            wsInstance.send("get new info")
            router.push(`/operator/order/${number}`)
        }
    }

    return (
        <Layout title={'Главный экран оператора'} showHeaderButton authorized>
            {page && (
                <Box theme={theme} variant={'main.wrap'}>
                    <Box theme={theme} variant={'main'}>

                        <Flex theme={theme} variant="main.statistics" flexDirection='column' alignItems='center'>
                            <Box theme={theme} variant={'main.statistics.icon'}>
                                <ClockIcon width={25} height={25} fill={theme.colors.green}/>
                            </Box>
                            <Box theme={theme} variant={'main.statistics.heading'}>Завершенные заказы</Box>
                            <Flex theme={theme} variant="main.statistics.info" justifyContent='space-between'>
                                <Flex theme={theme} flexDirection="column" alignItems="center">
                                    <Box theme={theme} variant={'main.statistics.period'}>Сегодня</Box>
                                    <Box theme={theme}
                                         variant={'main.statistics.total'}>{page.statistics.today} заказов</Box>
                                </Flex>
                                <Flex theme={theme} flexDirection="column" alignItems="center">
                                    <Box theme={theme} variant={'main.statistics.period'}>За месяц</Box>
                                    <Box theme={theme}
                                         variant={'main.statistics.total'}>{page.statistics.month} заказов</Box>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Box theme={theme} variant={'main.next'}>
                            <Box theme={theme} variant={'main.next.process'} onClick={() => handleGoToOrder(2)}>
                                Необходима обработка заказа
                            </Box>
                            <Box theme={theme} variant={'main.next.timer'}>Время
                                ожидания: {getTimeFrom(+page.currentOrder.timerStart)}</Box>
                        </Box>
                        <Flex theme={theme} variant='main.queue' alignItems='center' justifyContent='center'>
                            <Box theme={theme} variant={'main.queue.info.loader'}>
                                <DotsLoader/>
                            </Box>
                            <Box as={'span'} theme={theme} variant={'main.queue.info.value.text'}>
                                В очереди: <Box as={'span'} theme={theme}
                                                variant={'main.queue.info.value.number'}>{page.ordersInQueue ? page.ordersInQueue : 0}</Box>
                            </Box>
                        </Flex>
                    </Box>

                    <Flex theme={theme} justifyContent='center'>
                        <Flex theme={theme} variant={'main.swiper'} justifyContent='center'>
                            <Box theme={theme} variant={'main.swiper.view'}>
                                <Box theme={theme} variant={'main.swiper.view.title.center'}>
                                    {page.readyOrders.length ? "Заказы готовые к выдаче" : ("Нет заказов, готовых к выдаче")}</Box>
                                {page.readyOrders.length !== 0 && (
                                    <Swiper
                                        slidesPerView='auto'
                                        navigation
                                        spaceBetween={15}
                                    >
                                        {page.readyOrders.map(el => (
                                            <SwiperSlide key={el}>
                                                <Box theme={theme} variant={'main.swiper.view.slide'}>
                                                    <Button variant="primary" size="small">12345</Button>
                                                </Box>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                )}
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            )}
        </Layout>
    )
}

async function getMainServerSideProps({req, res}) {
    await applySession(req, res, options)

    const token = req.session.get("token")

    return {
        props: {
            accessToken: token["access_token"]
        }
    }
}

export const getServerSideProps = withAuthServerSideProps(getMainServerSideProps);