import styled from "@emotion/styled";

const OrderTableColStatusStyled = styled.div`
    display: flex;
    align-items: flex-end;
`

export default function OrderTableColStatus({children}) {
    return (
        <OrderTableColStatusStyled>{children}</OrderTableColStatusStyled>
    )
}