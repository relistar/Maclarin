import styled from "@emotion/styled";

const OrderTableColStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-basis: ${props => props.fb};
  text-wrap: none;
  white-space: nowrap;

  div {
    width: 100%;
    text-align: ${props => props.textAlign ? props.textAlign : 'inherit'};
  }
`

export default function OrderTableCol(props) {
    return (
        <OrderTableColStyled {...props}>{props.children}</OrderTableColStyled>
    )
}