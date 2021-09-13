import styled from "@emotion/styled";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 100%;
  
  border: ${props => props.theme.buttons[props.variant].border};
  
  font-size: ${props => props.theme.buttons.sizes[props.size].fontSize};
  height: ${props => props.theme.buttons.sizes[props.size].height};
  border-radius: ${props => props.theme.buttons.sizes[props.size].borderRadius};
  background-color: ${props => props.theme.buttons[props.variant].background};
  color: ${props => props.theme.buttons[props.variant].color};
  
  svg {
    margin-left: ${props => props.theme.buttons.sizes[props.size].iconML};
    margin-right: ${props => props.theme.buttons.sizes[props.size].iconMR};
  }

  &:hover {
    background-color: ${props => props.theme.buttons[props.variant].hover.background};
    color: ${props => props.theme.buttons[props.variant].hover.color};
  }
`

export default function Button({variant = "primary", size = 'large', icon, disabled, children}) {
    return (
        <StyledButton variant={variant} size={size} disabled={disabled}>{icon}{children}</StyledButton>
    )
}
