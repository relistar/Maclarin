import styled from "@emotion/styled";

const OrderDeliveryTimeStyled = styled.div`
  font-size: ${props => props.theme.fontSizes.p12};
  color: ${props => props.theme.colors.green};
`

export default function OrderDeliveryTime({children}) {
    return (
        <OrderDeliveryTimeStyled>{children}</OrderDeliveryTimeStyled>
    )
}