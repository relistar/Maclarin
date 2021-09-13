import styled from "@emotion/styled";

const OrderHeaderInputStyled = styled.div`
  width: 100%;
  min-width: 241px;
  height: 31px;
`

export default function OrderHeaderInput({children}) {
    return (
        <OrderHeaderInputStyled>{children}</OrderHeaderInputStyled>
    )
}