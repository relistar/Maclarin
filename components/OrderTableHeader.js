import styled from "@emotion/styled";

const OrderTableHeaderStyled = styled.div`
  padding: 0 40px 0 15px;
  height: 39px;
  border-bottom: 1px solid ${props => props.theme.colors.black20};
`

export default function OrderTableHeader({children}) {
    return (
        <OrderTableHeaderStyled>{children}</OrderTableHeaderStyled>
    )
}