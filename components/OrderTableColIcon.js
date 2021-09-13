import styled from "@emotion/styled";

const OrderTableColIconStyled = styled.div`
    svg {
      margin-bottom: -5px;
      margin-right: 5px;
    }
`

export default function OrderTableColIcon({children}) {
    return (
        <OrderTableColIconStyled>{children}</OrderTableColIconStyled>
    )
}