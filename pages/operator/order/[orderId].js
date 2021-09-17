import React, {useState} from "react"
import {CardIcon, ChevronRightIcon, CloseIcon, RemoveIcon, RingBellIcon} from "/components/Icon";
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
import {API, BASE_API} from "../../../shared/api";
import {selectStyles} from "../../../shared/selectStyles";
import Select, {components} from "react-select";
import {Formik} from "formik";
import DotsLoader from "../../../components/DotsLoader";

SwiperCore.use([Scrollbar, Mousewheel]);

function Loader() {
    return (
        <Flex theme={theme} variant={'loader'}>
            <Box theme={theme} variant={'loader.content'}>
                <DotsLoader/>
            </Box>
        </Flex>
    );
}

export default function AssemblyConfirm({orderT, token}) {
    const [promoCodePopupOpen, setPromoCodePopupOpen] = useState(false)
    const [someSubmit, setSomeSubmit] = useState(false)
    const [order, setOrder] = useState(orderT)

    const lineTypesMap = {
        'Товар': 'product',
        'Услуга': 'service',
    }

    const messages = {
        newPromoCode: {
            valid: 'Промокод введен',
            invalid: 'Введите промокод'
        }
    }

    const deliveryOptions = order.delivery.type.variants.map(variant => ({
        value: variant.deliveryTypeId,
        label: variant.title
    }))
    const deliveryOptionDefault = deliveryOptions.filter(option => option.value === order.delivery.type.selected)

    const shopOptions = order.shop.variants.map(variant => ({value: variant.shopId, label: variant.title}))
    const shopOptionDefault = shopOptions.filter(option => option.value === order.shop.selected)

    const promoCodeOptions = [
        {value: null, label: 'Промокод не применен'},
        {value: 'select', label: 'Ввести новый'},
    ]

    const promoCodeOptionDefault = promoCodeOptions[0]

    function validate(values) {

    }

    function handleSubmit(values, {setSubmitting}) {

    }

    function handleDeliveryTypeChange(arg) {
        const payload = {deliveryTypeId: arg.value, orderId: order.orderId}

        API.changeDeliveryType(payload, token).then(res => {
            const payload = res.data
            setOrder(payload)
            console.log(payload)
        }).catch(res => {
        })
    }

    function handleAssemblyAddressChange(arg) {
        const payload = {shopId: arg.value, orderId: order.orderId}

        API.changeShop(payload, token).then(res => {
            const payload = res.data
            setOrder(payload)
            console.log(payload)
        }).catch(res => {
        })

    }

    function handleCommentChange(event) {
        const newOrder = {...order}
        newOrder.comment = event.target.value
        setOrder(newOrder)
    }

    function handleServiceCommentChange(event) {
        const newOrder = {...order}
        newOrder.serviceComment = event.target.value
        setOrder(newOrder)
    }

    function handleCommentsSubmit() {
        const comments = {
            comment: order.comment,
            serviceComment: order.serviceComment
        }

        const query = {orderId: order.orderId}

        API.changeComments(query, comments, token).then(res => {
            const payload = res.data
            setOrder(payload)
            console.log(payload)
        }).catch(res => {
        })
    }

    function handleCommentsEnter(event) {
        if (event.key === 'Enter') {
            handleCommentsSubmit()
            event.preventDefault()
        }
    }

    function handleDeliveryAddressChange(event) {
        const newOrder = {...order}
        newOrder.delivery.address = event.target.value
        setOrder(newOrder)
    }

    function handleDeliveryAddressEnter(event) {
        if (event.key === 'Enter') {
            handleDeliveryAddressSubmit()
            event.preventDefault()
        }
    }

    function handleDeliveryAddressSubmit() {
        const query = {orderId: order.orderId}

        API.changeDeliveryAddress(query, +order.delivery.address, token).then(res => {
            const payload = res.data
            console.log(payload)
            setOrder(payload)
        }).catch(res => {
        })
    }


    function submitLineQuantityChange(lineId, value) {
        const query = {orderId: order.orderId, orderLineId: lineId}

        const quantity = {
            quantity: value,
            factQuantity: 0
        }

        API.changeOrderLineQuantity(query, quantity, token).then(res => {
            const payload = res.data
            setOrder(payload)
        }).catch(res => {
        })
    }

    function changeOrderLineQuantityState(lineId, value) {
        const newOrder = {...order}

        newOrder.lines.forEach(line => {
            if (lineId === line.order_line_id) {
                line.quantity = value
            }
        })

        setOrder(newOrder)
    }

    function handleLineQuantityChangeForButtons(lineId) {
        return function (value) {
            changeOrderLineQuantityState(lineId, value);
            submitLineQuantityChange(lineId, value);
        }
    }

    function handleLineQuantityChangeForInput(lineId) {
        return function (value) {
            changeOrderLineQuantityState(lineId, value);
        }
    }

    function handleLineQuantityBlur(lineId) {
        return function (event) {
            console.log(event.target)

            changeOrderLineQuantityState(lineId, event.target.value);
            submitLineQuantityChange(lineId, event.target.value);
        }
    }

    function handleLineQuantityEnter(lineId) {
        return function (event) {
            if (event.key === 'Enter') {
                changeOrderLineQuantityState(lineId, event.target.value);
                submitLineQuantityChange(lineId, event.target.value);
            }
        }
    }

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
                            <Box theme={theme} variant={'orderHeader.field.value'}>{order.customer.name}</Box>
                        </Flex>
                        <Flex theme={theme} variant='orderHeader.phone' alignItems='center'>
                            <Box theme={theme} variant={'orderHeader.field.title'}>Телефон</Box>
                            <Box theme={theme} variant={'orderHeader.field.value'}>
                                <Link href={`tel:${order.customer.phoneNumber}`}
                                      color={theme.colors.green}>{order.customer.phoneNumber}</Link>
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
                                        defaultValue={deliveryOptionDefault}
                                        onChange={handleDeliveryTypeChange}/>
                            </Box>
                        </Flex>
                        <Flex theme={theme} variant='orderHeader.address' alignItems='center'>
                            {order.delivery.type.selected === 1 ? (
                                <Box theme={theme} variant={'orderHeader.field.title'}>Адрес сборки</Box>) : (
                                <Box theme={theme} variant={'orderHeader.field.title'}>Адрес самовывоза</Box>)}
                            <Box theme={theme} variant={'orderHeader.field.value'}>
                                <Select components={{DropdownIndicator}}
                                        isSearchable={false}
                                        isClearable={false}
                                        styles={selectStyles}
                                        options={shopOptions}
                                        defaultValue={shopOptionDefault}
                                        onChange={handleAssemblyAddressChange}/>
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
                              justifyContent={order.delivery.type.selected === 1 ? 'space-between' : 'flex-end'}>
                            <Flex theme={theme} variant={'orderHeader.payment'} justifyContent={order.delivery.type.selected === 1 ? 'space-between' : 'flex-end'}>
                                <Flex theme={theme} justifyContent={'flex-start'}>
                                    <Box theme={theme} variant={'orderHeader.payment.icon'}>
                                        <CardIcon width={15} height={12} fill={theme.colors.green}/>
                                    </Box>
                                    <Box theme={theme}
                                         variant={'orderHeader.payment.method'}>Картой</Box>/
                                    {order.paymentInfo.status.isPaid ? (
                                        <Box theme={theme}
                                             variant={'orderHeader.payment.statusPaid'}>{order.paymentInfo.status.title}</Box>
                                    ) : (
                                        <Box theme={theme}
                                             variant={'orderHeader.payment.status'}>{order.paymentInfo.status.title}</Box>)}
                                </Flex>
                                {order.delivery.type.selected === 1 && (
                                    <Box theme={theme}
                                         variant={'orderHeader.delivery.estimation'}>Доставить 25.07.2021, 00:00</Box>)}
                            </Flex>
                        </Flex>
                        {order.delivery.type.selected === 1 ? (
                            <Flex theme={theme} variant='orderHeader.address' alignItems='center'>
                                <Box theme={theme} variant={'orderHeader.field.title'}>Адрес доставки</Box>
                                <Box theme={theme} variant={'orderHeader.field.value'}>
                                    <Input variant='default' size='small'
                                           value={order.delivery.address}
                                           onChange={handleDeliveryAddressChange}
                                           onBlur={handleDeliveryAddressSubmit}
                                           onKeyPress={handleDeliveryAddressEnter}
                                    />
                                </Box>
                            </Flex>
                        ) : (
                            <Box theme={theme}
                                 variant={'orderHeader.delivery.estimation'}>Доставить 25.07.2021, 00:00</Box>
                        )}

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
                        <Box theme={theme} variant={'order.heading.orderNum'}>Заказ №{order.orderNum}</Box>
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
                                    <Link href="#" color={theme.colors.orange}>{order.status.title}</Link>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex theme={theme} variant={'order.lines'}>
                    <Swiper direction={'vertical'} slidesPerView={'auto'} freeMode={true} scrollbar={true}
                            mousewheel={true} className="orderLines">
                        <SwiperSlide>
                            {order.lines.map(line => {
                                return line.type === 'Товар' ? (
                                    <Flex theme={theme} variant={'order.lines.line'} justifyContent={'space-between'}
                                          key={line.order_line_id}>
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
                                                                 dataUom={line.uom.value} value={line.quantity}
                                                                 min={line.uom.min}
                                                                 max={line.uom.max}
                                                                 step={line.uom.step}
                                                                 onChangeInputHandler={handleLineQuantityChangeForInput(line.order_line_id)}
                                                                 onChangeHandler={handleLineQuantityChangeForButtons(line.order_line_id)}
                                                                 onBlur={handleLineQuantityBlur(line.order_line_id)}
                                                                 onKeyPress={handleLineQuantityEnter(line.order_line_id)}/>
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
                                    <Flex theme={theme} variant={'order.lines.line'} justifyContent={'space-between'}
                                          key={line.order_line_id}>
                                        <Flex theme={theme}
                                              variant={'order.lines.line.col.first'}
                                              justifyContent={theme.variants.order.lines.line.col.first.justifyContent}>
                                            <Box theme={theme} variant={'order.lines.line.col.first.col.l'}>
                                                <Box theme={theme} variant={'order.lines.article'}/>
                                            </Box>
                                            <Box theme={theme} variant={'oorder.lines.line.col.first.col.r'}>
                                                <Box theme={theme} variant={'order.lines.nameBold'}>
                                                    {line.name}
                                                </Box>
                                            </Box>
                                        </Flex>
                                        <Flex theme={theme} variant={'order.lines.line.col.second'}>
                                            <Box theme={theme} variant={'order.lines.line.col.second.col.l'}>
                                                <Box theme={theme} variant={'order.lines.quantity'}/>
                                            </Box>
                                            <Box theme={theme} variant={'order.lines.line.col.second.col.r'}>
                                                <Box theme={theme} variant={'order.lines.factQuantity'}>
                                                </Box>
                                            </Box>
                                        </Flex>
                                        <Flex theme={theme} variant={'order.lines.line.col.third'}>
                                            <Flex theme={theme} variant={'order.lines.line.col.third.col.l'}>
                                                <Box theme={theme} variant={'order.lines.uomPrice'}>
                                                    <InputNumber dataTitle={'Кол-во'}
                                                                 dataUom={line.uom.value} value={line.quantity}
                                                                 withoutButtons/>
                                                </Box>
                                                <Box theme={theme} variant={'order.lines.price'}>
                                                    {currency(line.price, PRICE_FORMAT).format()}
                                                </Box>
                                            </Flex>
                                            <Flex theme={theme} variant={'order.lines.line.col.third.col.r'}>
                                                <Box theme={theme} variant={'order.lines.remove'}>
                                                    {/*<RemoveIcon width={24} height={24} fill={theme.colors.green}/>*/}
                                                </Box>
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                )
                            })}
                        </SwiperSlide></Swiper>
                </Flex>
            </Flex>

            <Flex theme={theme} variant={'controls'} justifyContent={'space-between'}
                  flexWrap={theme.variants.controls}>
                <Flex theme={theme} variant={'controls.col.l'}
                      width={theme.variants.controls.col.l.width}
                      flexWrap={theme.variants.controls.col.l.flexWrap}>
                    <Flex theme={theme} variant={'controls.col.l.row'}
                          width={theme.variants.controls.col.l.row.width}
                          flexWrap={theme.variants.controls.col.l.row.flexWrap}
                          justifyContent={'space-between'}>
                        <Flex theme={theme} variant={'controls.col.l.row.l'}
                              width={theme.variants.controls.col.l.row.l.width}>
                            <AddButton/>
                        </Flex>
                        <Flex theme={theme} variant={'controls.col.l.row.r'}
                              width={theme.variants.controls.col.l.row.r.width}>
                            {/*<Flex theme={theme} variant={'promo.applied'}
                                  width={theme.variants.promo.applied.width}>
                                <Box theme={theme} variant={'promo.applied.title'}>Промокод применен</Box>
                                <Box theme={theme} variant={'promo.applied.promo'}>ERUJD002</Box>
                            */}
                            <Flex theme={theme} variant={'promo.applied'}
                                  width={theme.variants.promo.applied.width}>
                                <Select components={{DropdownIndicator}}
                                        isSearchable={false}
                                        isClearable={false}
                                        styles={selectStyles}
                                        options={promoCodeOptions}
                                        defaultValue={promoCodeOptionDefault}/>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex theme={theme} variant={'controls.col.l.row'}
                          width={theme.variants.controls.col.l.row.width} justifyContent={'space-between'}>
                        <Flex theme={theme} variant={'controls.col.l.row.l.col.l'}
                              width={theme.variants.controls.col.l.row.l.col.l.width} flexDirection={'column'}>
                            <Input
                                type="text"
                                name="comment"
                                placeholder='Введите комментарий'
                                label='Комментарий'
                                value={order.comment}
                                withLabel
                                onChange={handleCommentChange}
                                onBlur={handleCommentsSubmit}
                                onKeyPress={handleCommentsEnter}
                            />
                        </Flex>
                        <Flex theme={theme} variant={'controls.col.l.row.r.col.r'}
                              width={theme.variants.controls.col.l.row.r.col.r.width} flexDirection={'column'}>
                            <Input
                                type="text"
                                name="serviceComment"
                                placeholder='Введите комментарий'
                                label='Служебный комментарий'
                                value={order.serviceComment}
                                withLabel
                                onChange={handleServiceCommentChange}
                                onBlur={handleCommentsSubmit}
                                onKeyPress={handleCommentsEnter}
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
                            <Button variant='confirm' size='small'>Отложить</Button>
                        </Box>
                        <Button variant='cancel' size='small'>Отменить</Button>
                    </Flex>
                    <Flex theme={theme} variant={'controls.col.r.col.r'}
                          width={theme.variants.controls.col.r.col.r.width} flexDirection={'column'}>
                        <Box theme={theme} variant={'mb10'}>
                            <Box theme={theme}
                                 variant={'totalSum'}>Итого {currency(order.totalSum, PRICE_FORMAT).format()}</Box>
                        </Box>
                        <Button variant='primary' size='xLarge'>Подтвердить</Button>
                    </Flex>
                </Flex>
            </Flex>
            {promoCodePopupOpen && (
                <Flex theme={theme} variant={'popup'}>
                    <Flex theme={theme} variant={'popup.overlay'}>
                        <Box theme={theme} variant={'popup.content'}>
                            <Flex theme={theme} variant={'popup.close'} justifyContent={'flex-end'}>
                                <CloseIcon width={24} height={24} fill={theme.colors.black}/>
                            </Flex>
                            <Box theme={theme} variant={'popup.modal'}>
                                <Box theme={theme}
                                     variant={'popup.modal.title'}>
                                    Введите промокод
                                </Box>
                                <Formik
                                    initialValues={{username: '', password: ''}}
                                    validate={validate}
                                    onSubmit={handleSubmit}
                                >
                                    {({
                                          values,
                                          errors,
                                          touched,
                                          handleChange,
                                          handleBlur,
                                          handleSubmit,
                                          isSubmitting
                                      }) => (
                                        <Flex theme={theme}
                                              variant={'popup.modal.form'}>
                                            <Flex theme={theme}
                                                  variant={'popup.modal.form.input'}>
                                                <Input
                                                    type="text"
                                                    name="newPromoCode"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.newPromoCode}
                                                    placeholder='Введите промокод'
                                                    disabled={isSubmitting}
                                                    variant={'border'}
                                                    size={'fullWidth'}
                                                    error={errors.newPromoCode && touched.newPromoCode && errors.newPromoCode}
                                                    success={touched.newPromoCode && !errors.newPromoCode && messages.newPromoCode.valid}
                                                />
                                            </Flex>
                                            <Button size="xLarge" type="submit"
                                                    disabled={isSubmitting}>Подтвердить</Button>
                                        </Flex>
                                    )}
                                </Formik>

                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            )}
            {someSubmit && (
                <Loader/>
            )}
        </Layout>
    )
}

async function getOrderServerSideProps({req, res, params}) {
    await applySession(req, res, options)

    const token = req.session.get("token")

    const data = await BASE_API.getOrderById(params, token)

    return {
        props: {
            token: token,
            orderT: data.data
        }
    }
}

export const getServerSideProps = withAuthServerSideProps(getOrderServerSideProps);