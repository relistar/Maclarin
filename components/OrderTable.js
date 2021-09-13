import styled from "@emotion/styled";

const OrderTableStyled = styled.div`
  width: 100%;
  height: 307px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.white};


  display: flex;
  flex-flow: column nowrap;
  padding: 24px 9px 17px 15px;

  margin: 0 auto 15px;
`

export default function OrderTable({children}) {
    return (
        <OrderTableStyled>{children}</OrderTableStyled>
    )
}