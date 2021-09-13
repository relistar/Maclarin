import styled from "@emotion/styled";

const OrderHeaderPaymentStyled = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.theme.fontSizes.p14};
  color: ${props => props.theme.colors.black60};
`

export default function OrderHeaderPayment({children}) {
    return (
        <OrderHeaderPaymentStyled>{children}</OrderHeaderPaymentStyled>
    )
}