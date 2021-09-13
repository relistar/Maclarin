import React from "react"
import {CardIcon, ChevronRightIcon, RemoveIcon, RingBellIcon} from "/components/Icon";
import Button from "/components/Button";
import theme from "/shared/theme";
import Link from "/components/Link";
import {Box, Flex} from "rebass";
import Input from "../../../components/Input";
import InputNumber from "../../../components/InputNumber";
import currency from "currency.js"


import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Mousewheel, Scrollbar} from 'swiper/core';
import {PRICE_FORMAT} from "../../../shared/constants";
import AddButton from "../../../components/AddButton";
import Layout from "../../../components/Layout";
import {applySession} from "next-iron-session";
import {options} from "../../../session";
import {withAuthServerSideProps} from "../../../session/withAuth";
import {BASE_API} from "../../../shared/api";
import {selectStyles} from "../../../shared/selectStyles";
import Select, {components} from "react-select";

SwiperCore.use([Scrollbar, Mousewheel]);

export default function AssemblyConfirm({orderT}) {
    const order = {
        orderId: 2,
        orderNum: 1,
        customer: {
            name: 'Иванов Иван',
            phoneNumber: '+7 904 018 91 91'
        },
        delivery: {
            type: {
                deliveryTypeId: 56423523,
                title: 'Самовывоз'
            },
            address: null,
            date: null
        },
        shopAddress: {
            selected: 52342352346,
            title: 'Тверь, Коминтерна, 95',
            variants: null
        },
        paymentInfo: {
            type: {
                paymentTypeId: 976,
                name: 'cash',
                title: 'Наличные'
            },
            status: {
                isPaid: false,
                title: 'Не оплачено'
            }
        },
        creationDate: new Date(1626977813 * 1000),
        status: {
            type: 'assembly',
            title: 'Сборка'
        },
        totalSum: 155840.00,
        lines: [
            {
                orderLineId: 656234,
                type: 'product',
                article: '1-Ф22',
                name: 'Баранина фермерская, бедро',
                quantity: 500,
                factQuantity: 505,
                uom: {
                    value: 'грамм',
                    price: 1809.00,
                    min: 0,
                    max: 1000,
                    step: 1
                },
                price: 404.00
            },
            {
                orderLineId: 656235,
                type: 'product',
                article: '1-Ф23',
                name: 'Бедро индейки',
                quantity: 500,
                factQuantity: 590,
                uom: {
                    value: 'грамм',
                    price: 70.00,
                    min: 0,
                    max: 1000,
                    step: 1
                },
                price: 55.00
            },
            {
                orderLineId: 656236,
                type: 'product',
                article: '1-Ф25',
                name: 'Макаронные изделия бабочка, 350г',
                quantity: 3,
                factQuantity: 1,
                uom: {
                    value: 'штуки',
                    price: 70.00,
                    min: 0,
                    max: 1000,
                    step: 1
                },
                price: 85.00
            },
            {
                orderLineId: 656237,
                type: 'product',
                article: '1-Ф27',
                name: 'Авокадо',
                quantity: 3,
                factQuantity: 1,
                uom: {
                    value: 'штуки',
                    price: 300.00,
                    min: 0,
                    max: 1000,
                    step: 1
                },
                price: 140.00
            },
            {
                orderLineId: 6538,
                type: 'product',
                article: '1-Ф26',
                name: 'Гнезда-Лапша, 500г',
                quantity: 3,
                factQuantity: 1,
                uom: {
                    value: 'штуки',
                    price: 70.00,
                    min: 0,
                    max: 1000,
                    step: 1
                },
                price: 140.00
            },
            {
                orderLineId: 71644588,
                type: 'product',
                article: '1-Ф26',
                name: 'Гнезда-Лапша, 500г',
                quantity: 3,
                factQuantity: 1,
                uom: {
                    value: 'штуки',
                    price: 70.00,
                    min: 0,
                    max: 1000,
                    step: 1
                },
                price: 140.00
            },
            {
                orderLineId: 178435,
                type: 'product',
                article: '1-Ф26',
                name: 'Гнезда-Лапша, 500г',
                quantity: 3,
                factQuantity: 1,
                uom: {
                    value: 'штуки',
                    price: 70.00,
                    min: 0,
                    max: 1000,
                    step: 1
                },
                price: 140.00
            },
            {
                orderLineId: 748256,
                type: 'product',
                article: '1-Ф26',
                name: 'Гнезда-Лапша, 500г',
                quantity: 3,
                factQuantity: 1,
                uom: {
                    value: 'штуки',
                    price: 70.00,
                    min: 0,
                    max: 1000,
                    step: 1
                },
                price: 140.00
            },
            {
                orderLineId: 623456,
                type: 'product',
                article: '1-Ф26',
                name: 'Гнезда-Лапша, 500г',
                quantity: 3,
                factQuantity: 1,
                uom: {
                    value: 'штуки',
                    price: 70.00,
                    min: 0,
                    max: 1000,
                    step: 1
                },
                price: 140.00
            },
            {
                orderLineId: 65625345,
                type: 'product',
                article: '1-Ф26',
                name: 'Гнезда-Лапша, 500г',
                quantity: 3,
                factQuantity: 1,
                uom: {
                    value: 'штуки',
                    price: 70.00,
                    min: 0,
                    max: 1000,
                    step: 1
                },
                price: 140.00
            },
        ],
        comment: 'Упаковать в пакет',
        serviceComment: null,
        promoCode: {
            isValid: true,
            value: 'ERUJD002'
        }
    }

    const lineTypesMap = {
        'Товар': 'product',
        'Услуга': 'service',
    }

    const deliveryOptions = orderT.delivery.type.variants.map(variant => ({
        value: variant.deliveryTypeId,
        label: variant.title
    }))
    const deliveryOptionDefault = deliveryOptions[0]

    const shopOptions = orderT.shop.variants.map(variant => ({value: variant.shopId, label: variant.title}))
    const shopOptionDefault = shopOptions[0]

    console.log(deliveryOptions)
    console.log(deliveryOptionDefault)

    console.log(shopOptions)
    console.log(shopOptionDefault)

    const DropdownIndicator = props => {
        return (
            <components.DropdownIndicator {...props}>
                <ChevronRightIcon width={18} height={18} fill={theme.colors.green}/>
            </components.DropdownIndicator>
        );
    };

    return (
        <Layout title={'Заказ оператор'} showHeaderButton>
            <Flex theme={theme} variant={'orderHeader'}>
                <Flex theme={theme} variant={'orderHeader.col.l'}
                      width={theme.variants.orderHeader.col.l.width}>
                    <Flex theme={theme} variant='orderHeader.col.l.col.l'
                          width={theme.variants.orderHeader.col.l.col.l.width}>
                        <Flex theme={theme} variant='orderHeader.customer' alignItems='center'
                              flexWrap={'nowrap'}>
                            <Box theme={theme} variant={'orderHeader.field.title'}>Заказчик</Box>
                            <Box theme={theme} variant={'orderHeader.field.value'}>{orderT.customer.name}</Box>
                        </Flex>
                        <Flex theme={theme} variant='orderHeader.phone' alignItems='center'>
                            <Box theme={theme} variant={'orderHeader.field.title'}>Телефон</Box>
                            <Box theme={theme} variant={'orderHeader.field.value'}>
                                <Link href={`tel:${orderT.customer.phoneNumber}`}
                                      color={theme.colors.green}>{orderT.customer.phoneNumber}</Link>
                            </Box>
                        </Flex>
                    </Flex>
                    <Flex theme={theme} variant='orderHeader.col.l.col.r'
                          width={theme.variants.orderHeader.col.l.col.r.width}>
                        <Flex theme={theme} variant='orderHeader.delivery' alignItems='center'>
                            <Box theme={theme} variant={'orderHeader.field.title'}>Тип доставки</Box>
                            <Box theme={theme} variant={'orderHeader.field.value'}>
                                <Select components={{DropdownIndicator}}
                                        isSearchable={false}
                                        isClearable={false}
                                        styles={selectStyles}
                                        options={deliveryOptions}
                                        defaultValue={deliveryOptionDefault}/>
                            </Box>
                        </Flex>
                        <Flex theme={theme} variant='orderHeader.address' alignItems='center'>
                            <Box theme={theme} variant={'orderHeader.field.title'}>Адрес сборки</Box>
                            <Box theme={theme} variant={'orderHeader.field.value'}>
                                <Select components={{DropdownIndicator}}
                                        isSearchable={false}
                                        isClearable={false}
                                        styles={selectStyles}
                                        options={shopOptions}
                                        defaultValue={shopOptionDefault}/>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex theme={theme} variant={'orderHeader.col.r'}
                      width={theme.variants.orderHeader.col.r.width}>
                    <Flex theme={theme} variant='' flexDirection='column'>
                        <Flex theme={theme}
                              variant='orderHeader.paymentWrap'
                              alignItems='center'
                              justifyContent='space-between'>
                            <Flex theme={theme} variant={'orderHeader.payment'} justifyContent={'space-between'}>
                                <Flex theme={theme} justifyContent={'flex-start'}>
                                    <Box theme={theme} variant={'orderHeader.payment.icon'}>
                                        <CardIcon width={15} height={12} fill={theme.colors.green}/>
                                    </Box>
                                    <Box theme={theme}
                                         variant={'orderHeader.payment.method'}>{orderT.paymentInfo.type.title}</Box>/
                                    {orderT.paymentInfo.status.isPaid ? (
                                        <Box theme={theme}
                                             variant={'orderHeader.payment.statusPaid'}>{orderT.paymentInfo.status.title}</Box>
                                    ) : (
                                        <Box theme={theme}
                                             variant={'orderHeader.payment.status'}>{orderT.paymentInfo.status.title}</Box>)}
                                </Flex>
                                <Box theme={theme}
                                     variant={'orderHeader.delivery.estimation'}>Доставить 25.07.2021, 00:00</Box>
                            </Flex>
                        </Flex>
                        <Flex theme={theme} variant='orderHeader.address' alignItems='center'>
                            <Box theme={theme} variant={'orderHeader.field.title'}>Адрес доставки</Box>
                            <Box theme={theme} variant={'orderHeader.field.value'}>
                                <Input variant='default' size='small'
                                       value={orderT.delivery.address}/>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>

            <Flex theme={theme} variant={'order'}
                  flexDirection={'column'}>
                <Flex theme={theme} variant={'order.heading'}
                      justifyContent={'space-between'}
                      alignItems={'flex-end'}>
                    <Flex theme={theme}
                          variant={'order.heading.col.l'}
                          alignItems={'flex-end'}
                          width={theme.variants.order.heading.col.l.width}>
                        <Box theme={theme} variant={'order.heading.orderNum'}>Заказ №{orderT.orderNum}</Box>
                        <Flex theme={theme} variant={'order.heading.date'}>
                            {/*<Box theme={theme}
                                 variant={'order.heading.date.dom'}>от {format(order.creationDate, DATE_FORMAT)}</Box>
                            <Box theme={theme}
                                 variant={'order.heading.date.time'}>{format(order.creationDate, TIME_FORMAT)}</Box>*/}

                            <Box theme={theme}
                                 variant={'order.heading.date.dom'}>11.08.2021</Box>
                            <Box theme={theme}
                                 variant={'order.heading.date.time'}>01:00</Box>
                        </Flex>
                    </Flex>
                    <Flex theme={theme} variant={'order.heading.col.r'}
                          alignItems={'flex-end'}
                          width={theme.variants.order.heading.col.r.width}>
                        <Box theme={theme} variant={'order.heading.quantity'}/>
                        <Box theme={theme} variant={'order.heading.factQuantity'}>Кол-во</Box>
                        <Flex theme={theme} variant={'order.heading.status'} alignItems={'flex-end'}>
                            <Box theme={theme} variant={'order.heading.status.title'}>Статус:</Box>
                            <Flex theme={theme} variant={'order.heading.status.value'} alignItems={'flex-end'}>
                                <Box theme={theme} variant={'order.heading.status.value.icon'}>
                                    <RingBellIcon width={14} height={14} fill={theme.colors.orange}/>
                                </Box>
                                <Box theme={theme} variant={'order.heading.status.value.label'}>
                                    <Link href="#" color={theme.colors.orange}>{orderT.status.title}</Link>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex theme={theme} variant={'order.lines'}>
                    <Swiper direction={'vertical'} slidesPerView={'auto'} freeMode={true} scrollbar={true}
                            mousewheel={true} className="orderLines">
                        <SwiperSlide>
                            {orderT.lines.map(line => {
                                return line.type === 'Товар' ? (
                                    <Flex theme={theme} variant={'order.lines.line'} justifyContent={'space-between'} key={line.order_line_id}>
                                        <Flex theme={theme}
                                              variant={'order.lines.line.col.first'}
                                              justifyContent={theme.variants.order.lines.line.col.first.justifyContent}>
                                            <Box theme={theme} variant={'order.lines.line.col.first.col.l'}>
                                                <Box theme={theme} variant={'order.lines.article'}>
                                                    {line.article ? line.article : '---'}
                                                </Box>
                                            </Box>
                                            <Box theme={theme} variant={'oorder.lines.line.col.first.col.r'}>
                                                <Box theme={theme} variant={'order.lines.name'}>
                                                    {line.name}
                                                </Box>
                                            </Box>
                                        </Flex>
                                        <Flex theme={theme} variant={'order.lines.line.col.second'}>
                                            <Box theme={theme} variant={'order.lines.line.col.second.col.l'}>
                                                <Box theme={theme} variant={'order.lines.quantity'}>
                                                </Box>
                                            </Box>
                                            <Box theme={theme} variant={'order.lines.line.col.second.col.r'}>
                                                <Box theme={theme} variant={'order.lines.factQuantity'}>
                                                    {/*<InputNumber dataTitle={'Фактически'} dataUom={line.uom.value}
                                                                 value={line.factQuantity}/>*/}

                                                    <InputNumber dataTitle={'Кол-во'}
                                                                 dataUom={line.uom.value} value={line.quantity}/>
                                                </Box>
                                            </Box>
                                        </Flex>
                                        <Flex theme={theme} variant={'order.lines.line.col.third'}>
                                            <Flex theme={theme} variant={'order.lines.line.col.third.col.l'}>
                                                <Box theme={theme} variant={'order.lines.uomPrice'}>
                                                    {`${currency(line.uom.price, PRICE_FORMAT).format()}/${line.uom.value}`}
                                                </Box>
                                                <Box theme={theme} variant={'order.lines.price'}>
                                                    {currency(line.price, PRICE_FORMAT).format()}
                                                </Box>
                                            </Flex>
                                            <Flex theme={theme} variant={'order.lines.line.col.third.col.r'}>
                                                <Box theme={theme} variant={'order.lines.remove'}>
                                                    <RemoveIcon width={24} height={24} fill={theme.colors.green}/>
                                                </Box>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                ) : (
                                    <></>
                                )
                            })}
                        </SwiperSlide></Swiper>
                </Flex>
            </Flex>
            {/*<OrderTable>
                <OrderTableHeader>
                    <OrderTableRow>
                        <OrderTableCol fb={'17.7%'} fg={1}>
                            <Text fontWeight='bold' fontSize={[theme.fontSizes.p22]}>Заказ
                                №{order.orderNum}</Text>
                        </OrderTableCol>
                        <OrderTableCol fb={'43%'} fg={1} textAllign={"left"}>
                            <Box theme={theme} as={'span'}
                                 variant='colText'>от {format(order.creationDate, DATE_FORMAT)}, <Box
                                theme={theme} as={'span'}
                                variant='colTextOrange'>{format(order.creationDate, TIME_FORMAT)}</Box></Box>
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
                                    <Link href="#" color={theme.colors.orange}>{order.status.title}</Link>
                                </OrderTableColStatusLink>
                            </OrderTableColStatus>
                        </OrderTableCol>
                    </OrderTableRow>
                </OrderTableHeader>
                <OrderTableBody>
                    <Swiper direction={'vertical'} slidesPerView={'auto'} freeMode={true} scrollbar={true}
                            mousewheel={true} className="orderLines">
                        <SwiperSlide>
                            {order.lines.map(line => (
                                <OrderTableRow key={line.orderLineId} minHeight={37} alignItems='center'>
                                    <OrderTableCol fb={'17.7%'} fg={1}>
                                        <Text color='black' fontSize={[theme.fontSizes.p14]}>
                                            {line.article}
                                        </Text>
                                    </OrderTableCol>
                                    <OrderTableCol fb={'43%'} fg={1}>
                                        <Text color='green' fontSize={[theme.fontSizes.p14]}>
                                            {line.name}
                                        </Text>
                                    </OrderTableCol>
                                    <OrderTableCol fb={'33.4%'} fg={1}>
                                        <Flex alignItems='center' justifyContent='flex-end'
                                              flexDirection='column'>
                                            <Box>
                                                <InputNumber value={1}/>
                                            </Box>
                                            <OrderColInputNumberBoxUOM>
                                                {line.uom.value}
                                            </OrderColInputNumberBoxUOM>
                                        </Flex>
                                    </OrderTableCol>
                                    <OrderTableCol fb={'18%'} fg={1} textAlign="right">
                                        <Text color='black' textAllign={'center'}
                                              fontSize={[theme.fontSizes.p14]}>
                                            {`${currency(line.uom.price, PRICE_FORMAT).format()}/${line.uom.value}`}
                                        </Text>
                                    </OrderTableCol>
                                    <OrderTableCol fb={'20%'} fg={1} textAlign="right">
                                        <Text color='black' fontWeight='bold'
                                              fontSize={[theme.fontSizes.p18]}>{currency(line.price, PRICE_FORMAT).format()}</Text>
                                    </OrderTableCol>
                                </OrderTableRow>
                            ))}
                        </SwiperSlide></Swiper>
                </OrderTableBody>
            </OrderTable>*/}
            <Flex theme={theme} variant={'controls'} justifyContent={'space-between'}
                  flexWrap={theme.variants.controls}>
                <Flex theme={theme} variant={'controls.col.l'}
                      width={theme.variants.controls.col.l.width}
                      flexWrap={theme.variants.controls.col.l.flexWrap}>
                    {/*<Flex theme={theme} variant={'controls.col.l.row'}
                          width={theme.variants.controls.col.l.row.width}
                          flexWrap={theme.variants.controls.col.l.row.flexWrap}
                          justifyContent={'space-between'}>
                        <Flex theme={theme} variant={'controls.col.l.row.l'}
                              width={theme.variants.controls.col.l.row.l.width}>
                            <AddButton/>
                        </Flex>
                        <Flex theme={theme} variant={'controls.col.l.row.r'}
                              width={theme.variants.controls.col.l.row.r.width}>
                            <Flex theme={theme} variant={'promo.applied'}
                                  width={theme.variants.promo.applied.width}>
                                <Box theme={theme} variant={'promo.applied.title'}>Промокод применен</Box>
                                <Box theme={theme} variant={'promo.applied.promo'}>ERUJD002</Box>
                            </Flex>
                        </Flex>
                    </Flex>*/}
                    <Flex theme={theme} variant={'controls.col.l.row'}
                          width={theme.variants.controls.col.l.row.width} justifyContent={'space-between'}>
                        <Flex theme={theme} variant={'controls.col.l.row.l.col.l'}
                              width={theme.variants.controls.col.l.row.l.col.l.width} flexDirection={'column'}>
                            <Input
                                type="text"
                                name="comment"
                                placeholder='Введите комментарий'
                                label='Комментарий'
                                withLabel
                            />
                        </Flex>
                        <Flex theme={theme} variant={'controls.col.l.row.r.col.r'}
                              width={theme.variants.controls.col.l.row.r.col.r.width} flexDirection={'column'}>
                            <Input
                                type="text"
                                name="serviceComment"
                                placeholder='Введите комментарий'
                                label='Служебный комментарий'
                                withLabel
                            />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex theme={theme} variant={'controls.col.r'}
                      width={theme.variants.controls.col.r.width}
                      flexWrap={theme.variants.controls.col.r.flexWrap}
                      justifyContent={'flex-end'}>
                    <Flex theme={theme} variant={'controls.col.r.col.l'}
                          width={theme.variants.controls.col.r.col.l.width} flexDirection={'column'}>
                        <Box theme={theme} variant={'controls.col.r.col.l.col.l'}>
                            {/*<Button variant='confirm' size='small'>Сборка завершена</Button>*/}
                            <Input
                                type="text"
                                name="comment"
                                placeholder='Введите промокод'
                                label='Промокод'
                                withLabel
                            />
                        </Box>
                        {/*<Button variant='cancel' size='small'>Отменить</Button>*/}
                    </Flex>
                    <Flex theme={theme} variant={'controls.col.r.col.r'}
                          width={theme.variants.controls.col.r.col.r.width} flexDirection={'column'}>
                        <Box theme={theme} variant={'mb10'}>
                            <Box theme={theme}
                                 variant={'totalSum'}>Итого {currency(orderT.totalSum, PRICE_FORMAT).format()}</Box>
                        </Box>
                        <Button variant='primary' size='xLarge'>Взять в работу</Button>
                    </Flex>
                </Flex>
            </Flex>
        </Layout>
    )
}

async function getOrderServerSideProps({req, res, params}) {
    await applySession(req, res, options)

    const token = req.session.get("token")

    const data = await BASE_API.getOrderById(params, token)

    return {
        props: {
            accessToken: token["access_token"],
            orderT: data.data
        }
    }
}

export const getServerSideProps = withAuthServerSideProps(getOrderServerSideProps);