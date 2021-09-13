import styled from "@emotion/styled";

const OrderTableBodyStyled = styled.div`
  padding: 0 2px 0 14px;
  height: 245px;
  box-shadow: 0 30px 25px -20px rgb(232 232 232 / 70%) inset;
`

export default function OrderTableBody({children}) {
    return (
        <OrderTableBodyStyled>{children}</OrderTableBodyStyled>
    )
}