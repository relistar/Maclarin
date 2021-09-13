import styled from "@emotion/styled";

const OrderHeaderValueStyled = styled.div`
  color: ${props => props.theme.colors.black60};
  font-size: ${props => props.theme.fontSizes.p14};
  line-height: ${props => props.theme.fontSizes.p14};
  outline: none;
  white-space: nowrap;
`

export default function OrderHeaderValue({children}) {
    return (
        <OrderHeaderValueStyled>{children}</OrderHeaderValueStyled>
    )
}