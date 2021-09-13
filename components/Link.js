import styled from "@emotion/styled";

export default function Link(props) {
    return (
        <LinkStyled {...props}>{props.children}</LinkStyled>
    )
}

const LinkStyled = styled.a`
    font-size: ${props => props.theme.fontSizes.p14};
    color: ${props => props.color ? props.color : props.theme.colors.bej};
    text-decoration: underline;
`