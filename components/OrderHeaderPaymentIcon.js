import styled from "@emotion/styled";

const OrderHeaderPaymentIconStyled = styled.div`
    margin-right: 8px;
`

export default function OrderHeaderPaymentIcon({children}) {
    return (
        <OrderHeaderPaymentIconStyled>{children}</OrderHeaderPaymentIconStyled>
    )
}