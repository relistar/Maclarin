import React from "react"
import Content from "/components/Content";
import {CardIcon, ChevronRightIcon, RingBellIcon} from "/components/Icon";
import Button from "/components/Button";
import theme from "/shared/theme";
import Link from "/components/Link";
import {Box, Flex, Text} from "rebass";
import OrderHeaderField from "../../../../components/OrderHeaderField";
import OrderHeaderValue from "../../../../components/OrderHeaderValue";
import Select, {components} from "react-select";
import {selectStyles} from "../../../../shared/selectStyles";
import Input from "../../../../components/Input";
import OrderHeaderInput from "../../../../components/OrderHeaderInput";
import OrderHeaderPayment from "../../../../components/OrderHeaderPayment";
import PaymentMethod from "../../../../components/PaymentMethod";
import OrderDeliveryTime from "../../../../components/OrderDeliveryTime";
import PaymentStatus from "../../../../components/PaymentStatus";
import OrderHeaderPaymentIcon from "../../../../components/OrderHeaderPaymentIcon";
import OrderTable from "../../../../components/OrderTable";
import OrderTableHeader from "../../../../components/OrderTableHeader";
import OrderTableRow from "../../../../components/OrderTableRow";
import OrderTableCol from "../../../../components/OrderTableCol";
import OrderTableBody from "../../../../components/OrderTableBody";
import OrderTableColIcon from "../../../../components/OrderTableColIcon";
import OrderTableColStatusLink from "../../../../components/OrderTableColStatusLink";
import OrderTableColStatus from "../../../../components/OrderTableColStatus";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {
    Scrollbar, Mousewheel
} from 'swiper/core';
import InputNumber from "../../../../components/InputNumber";
import OrderColInputNumberBoxUOM from "../../../../components/OrderColInputNumberBoxUOM";
import Layout from "../../../../components/Layout";

SwiperCore.use([Scrollbar, Mousewheel]);

export default function Home() {
    const deliveryOptions = [
        {value: '123', label: 'Доставка до клиента'},
        {value: '1234', label: 'Самовывоз'},
        {value: '1235', label: 'Delivery Club'}
    ]

    const addressesOptions = [
        {value: '5435', label: 'Тверь, Коминтерна, 95'},
        {value: '6346', label: 'Тверь, Склизкова, 116к3'},
        {value: '12353453455', label: 'Тверь, Стеденческий пер., 11'}
    ]

    const rows = [
        {
            id: 42342341234,
            num: '1-Ф25',
            name: 'Сок клюквенный Астик, 0,5 л',
            ea: '70,00 ₽/шт',
            price: '85,00 ₽'
        },
        {
            id: 42342341236,
            num: '1-Ф27',
            name: 'Авокадо',
            ea: '300,00 ₽/кг',
            price: '140,00 ₽'
        },
        {
            id: 423423412344123,
            num: '1-Ф26',
            name: 'Гнезда-Лапша, 500г',
            ea: '70,00 ₽/шт',
            price: '70,00 ₽'
        },
        {
            id: 53425324532463245,
            num: '1-Ф22',
            name: 'Гнезда-Лапша, 500г',
            ea: '70,00 ₽/шт',
            price: '140,00 ₽'
        },
        {
            id: 75,
            num: '1-Ф22',
            name: 'Гнезда-Лапша, 500г',
            ea: '70,00 ₽/шт',
            price: '140,00 ₽'
        },
        {
            id: 35234552234,
            num: '1-Ф22',
            name: 'Гнезда-Лапша, 500г',
            ea: '70,00 ₽/шт',
            price: '140,00 ₽'
        },
        {
            id: 523456432543,
            num: '1-Ф22',
            name: 'Гнезда-Лапша, 500г',
            ea: '70,00 ₽/шт',
            price: '140,00 ₽'
        },
        {
            id: 53388999009,
            num: '1-Ф22',
            name: 'Гнезда-Лапша, 500г',
            ea: '70,00 ₽/шт',
            price: '140,00 ₽'
        },
        {
            id: 412371484637634,
            num: '1-Ф22',
            name: 'Гнезда-Лапша, 500г',
            ea: '70,00 ₽/шт',
            price: '140,00 ₽'
        },
        {
            id: 33347123,
            num: '1-Ф22',
            name: 'Гнезда-Лапша, 500г',
            ea: '70,00 ₽/шт',
            price: '140,00 ₽'
        },
        {
            id: 6234735445584563,
            num: '1-Ф22',
            name: 'Гнезда-Лапша, 500г',
            ea: '70,00 ₽/шт',
            price: '140,00 ₽'
        }
    ]

    const deliveryOptionDefault = deliveryOptions[0]
    const addressesOptionDefault = addressesOptions[0]


    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <ChevronRightIcon width={18} height={18} fill={theme.colors.green}/>
            </components.DropdownIndicator>
        );
    };


    return (
        <Layout title={'Оператор|Доставка'} showHeaderButton>
            <Content>
                <Flex theme={theme} variant='orderHead' justifyContent='space-between'>
                    <Flex theme={theme} variant='orderHeadColumn' flexDirection='column'>
                        <Flex theme={theme} variant='orderHeadColumnItem' alignItems='center'>
                            <OrderHeaderField>Заказчик</OrderHeaderField>
                            <OrderHeaderValue>Иванов Иван</OrderHeaderValue>
                        </Flex>
                        <Flex theme={theme} alignItems='center'>
                            <OrderHeaderField>Телефон</OrderHeaderField>
                            <OrderHeaderValue>+7 904 018 91 91</OrderHeaderValue>
                        </Flex>
                    </Flex>
                    <Flex theme={theme} variant='orderHeadColumn' flexDirection='column'>
                        <Flex theme={theme} variant='orderHeadColumnItem' alignItems='center'>
                            <OrderHeaderField>Тип доставки</OrderHeaderField>
                            <OrderHeaderValue>
                                <Select components={{DropdownIndicator}}
                                        isSearchable={false}
                                        isClearable={false}
                                        styles={selectStyles}
                                        options={deliveryOptions}
                                        defaultValue={deliveryOptionDefault}/>
                            </OrderHeaderValue>
                        </Flex>
                        <Flex theme={theme} alignItems='center'>
                            <OrderHeaderField>Адрес сборки</OrderHeaderField>
                            <OrderHeaderValue>
                                <Select components={{DropdownIndicator}}
                                        isSearchable={false}
                                        isClearable={false}
                                        styles={selectStyles}
                                        options={addressesOptions}
                                        defaultValue={addressesOptionDefault}/>
                            </OrderHeaderValue>
                        </Flex>
                    </Flex>
                    <Flex theme={theme} variant='orderHeadColumn' flexDirection='column'>
                        <Flex theme={theme} variant='orderHeadColumnItemMB' alignItems='center'
                              justifyContent='space-between'>
                            <OrderHeaderPayment>
                                <OrderHeaderPaymentIcon>
                                    <CardIcon width={15} height={12} fill={theme.colors.green}/>
                                </OrderHeaderPaymentIcon>
                                <PaymentMethod>Наличные</PaymentMethod>/<PaymentStatus>Оплачено</PaymentStatus>
                            </OrderHeaderPayment>
                            <OrderDeliveryTime>Доставить 17.06.2021, 14:00</OrderDeliveryTime>
                        </Flex>
                        <Flex theme={theme} alignItems='center'>
                            <OrderHeaderField css={{marginRight: 19}}>Адрес доставки</OrderHeaderField>
                            <OrderHeaderValue>
                                <OrderHeaderInput>
                                    <Input variant='default' size='small'
                                           value="Тверь, Шмидта 47, кв 56, 4 этаж"/>
                                </OrderHeaderInput>
                            </OrderHeaderValue>
                        </Flex>
                    </Flex>
                </Flex>
                <OrderTable>
                    <OrderTableHeader>
                        <OrderTableRow>
                            <OrderTableCol fb={'17.7%'} fg={1}>
                                <Text fontWeight='bold' fontSize={[theme.fontSizes.p22]}>Заказ №1</Text>
                            </OrderTableCol>
                            <OrderTableCol fb={'43%'} fg={1} textAllign={"left"}>
                                <Box theme={theme} as={'span'} variant='colText'>от 11.06.2021, <Box theme={theme}
                                                                                                     as={'span'}
                                                                                                     variant='colTextOrange'>11:50</Box></Box>
                            </OrderTableCol>
                            <OrderTableCol fb={'33.4%'} fg={1} textAlign={"center"}>
                                <Text fontSize={[theme.fontSizes.p12]}>Кол-во</Text>
                            </OrderTableCol>
                            <OrderTableCol fb={'18%'} fg={1} textAlign="right">
                                <Text fontSize={[theme.fontSizes.p12]}>Статус:</Text>
                            </OrderTableCol>
                            <OrderTableCol fb={'20%'} fg={1} textAlign="right">
                                <OrderTableColStatus>
                                    <OrderTableColIcon>
                                        <RingBellIcon width={15} height={15} fill={theme.colors.orange}/>
                                    </OrderTableColIcon>
                                    <OrderTableColStatusLink>
                                        <Link href="#" color={theme.colors.orange}>Новый заказ</Link>
                                    </OrderTableColStatusLink>
                                </OrderTableColStatus>
                            </OrderTableCol>
                        </OrderTableRow>
                    </OrderTableHeader>
                    <OrderTableBody>
                        <Swiper direction={'vertical'} slidesPerView={'auto'} freeMode={true} scrollbar={true}
                                mousewheel={true} className="orderLines">
                            <SwiperSlide>
                                {rows.map(row => (
                                    <OrderTableRow key={row.id} minHeight={37} alignItems='center'>
                                        <OrderTableCol fb={'17.7%'} fg={1}>
                                            <Text color='black' fontSize={[theme.fontSizes.p14]}>
                                                {row.num}
                                            </Text>
                                        </OrderTableCol>
                                        <OrderTableCol fb={'43%'} fg={1}>
                                            <Text color='green' fontSize={[theme.fontSizes.p14]}>
                                                {row.name}
                                            </Text>
                                        </OrderTableCol>
                                        <OrderTableCol fb={'33.4%'} fg={1}>
                                            <Flex alignItems='center' justifyContent='flex-end'
                                                  flexDirection='column'>
                                                <Box>
                                                    <InputNumber value={1}/>
                                                </Box>
                                                <OrderColInputNumberBoxUOM>
                                                    грамм
                                                </OrderColInputNumberBoxUOM>
                                            </Flex>
                                        </OrderTableCol>
                                        <OrderTableCol fb={'18%'} fg={1} textAlign="right">
                                            <Text color='black' textAllign={'center'}
                                                  fontSize={[theme.fontSizes.p14]}>
                                                {row.ea}
                                            </Text>
                                        </OrderTableCol>
                                        <OrderTableCol fb={'20%'} fg={1} textAlign="right">
                                            <Text color='black' fontWeight='bold'
                                                  fontSize={[theme.fontSizes.p18]}>{row.price}</Text>
                                        </OrderTableCol>
                                    </OrderTableRow>
                                ))}
                            </SwiperSlide></Swiper>
                    </OrderTableBody>
                </OrderTable>
                <Flex theme={theme} variant='totalPrice' alignItems='flex-end' justifyContent='flex-end'>
                    <Text color='green' fontSize={theme.fontSizes.p18}>Итого 155 840,00 ₽</Text>
                </Flex>
                <Flex theme={theme} variant='orderAF' alignItems='flex-end' justifyContent='space-between'>
                    <Flex theme={theme} variant='cardInputComment' flexDirection='column'>
                        <Input
                            type="text"
                            name="comment"
                            placeholder='Введите комментарий'
                            label='Комментарий'
                            withLabel
                        />
                    </Flex>
                    <Flex theme={theme} variant='cardInputServiceComment' flexDirection='column'>
                        <Input
                            type="text"
                            name="serviceComment"
                            placeholder='Введите комментарий'
                            label='Служебный комментарий'
                            withLabel
                        />
                    </Flex>
                    <Flex theme={theme} variant='cardInputPromoCode' flexDirection='column'>
                        <Input
                            type="text"
                            name="promoCode"
                            placeholder='Введите промокод'
                            label='Промокод'
                            withLabel
                            withStatusIcon
                        />
                    </Flex>
                    <Box theme={theme} variant='button216'>
                        <Button variant='primary' size='xLarge'>Взять в работу</Button>
                    </Box>
                </Flex>
            </Content>
        </Layout>
    )
}