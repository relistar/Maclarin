import styled from "@emotion/styled";

const OrderTableRowStyled = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: ${props => props.alignItems};
  min-height: ${props => props.minHeight}px;
  margin-bottom: 8px;
  padding-bottom: 14px;
  font-size: ${props => props.theme.fontSizes.p14};
  line-height: 120.68%;
`

export default function OrderTableRow({children, minHeight = 39, alignItems='flex-end'}) {
    return (
        <OrderTableRowStyled alignItems={alignItems} minHeight={minHeight}>{children}</OrderTableRowStyled>
    )
}