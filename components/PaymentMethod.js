import styled from "@emotion/styled";

const PaymentMethodStyled = styled.div`
  font-size: ${props => props.theme.fontSizes.p14};
  color: ${props => props.theme.colors.black60};
`

export default function PaymentMethod({children}) {
    return (
        <PaymentMethodStyled>{children}</PaymentMethodStyled>
    )
}