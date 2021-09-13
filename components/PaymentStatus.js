import styled from "@emotion/styled";

const PaymentStatusStyled = styled.div`
  font-size: ${props => props.theme.fontSizes.p14};
  color: ${props => props.theme.colors.green};
`

export default function PaymentStatus({children}) {
    return (
        <PaymentStatusStyled>{children}</PaymentStatusStyled>
    )
}