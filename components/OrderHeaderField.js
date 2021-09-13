import styled from "@emotion/styled";

const OrderHeaderFieldStyled = styled.div`
  color: ${props => props.theme.colors.black60};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.p12};
  line-height: ${props => props.theme.fontSizes.p14};
  margin-right: 20px;
  white-space: nowrap;
`

export default function OrderHeaderField(props) {
    return (
        <OrderHeaderFieldStyled {...props}>{props.children}</OrderHeaderFieldStyled>
    )
}