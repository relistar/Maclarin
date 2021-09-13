import styled from "@emotion/styled";

const StyledContent = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 0 ${props => props.px || props.px === 0 ? props.px : 53}px;
`

export default function Content(props) {
    return (
        <StyledContent px={props.px}>{props.children}</StyledContent>
    )
}