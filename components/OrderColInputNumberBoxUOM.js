import styled from "@emotion/styled";

const OrderColInputNumberBoxUOMStyled = styled.span`
  text-align: center;
  font-size: ${props => props.theme.fontSizes.p9};
  color: ${props => props.theme.colors.gray30}
`

export default function OrderColInputNumberBoxUOM({children}) {
    return (
        <OrderColInputNumberBoxUOMStyled>{children}</OrderColInputNumberBoxUOMStyled>
    )
}