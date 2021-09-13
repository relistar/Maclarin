import styled from "@emotion/styled";
import {CloseIcon, TickIcon} from "./Icon";

const InputStyled = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: ${props => props.theme.inputs.sizes[props.size].height};
  border-radius: ${props => props.theme.inputs.sizes[props.size].borderRadius};
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.black};
  padding: ${props => props.theme.inputs.sizes[props.size].padding};
  border: 1px solid ${props => props.theme.inputs.variants[props.variant].borderColor};
  font-size: ${props => props.theme.fontSizes.p12};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.colors.black40};
  }

  svg {
    margin-left: -10px;
    margin-right: 15px;
  }
`

const LabelStyled = styled.label`
  width: 100%;
  display: block;
  font-size: ${props => props.theme.fontSizes.p12};
  margin-bottom: 7px;
  color: ${props => props.theme.labels[props.variant].color};
`

const InputWrapStyled = styled.div`
  display: flex;
  align-items: center;
  height: ${props => props.theme.inputs.sizes[props.size].height};

  svg {
    margin-left: -37px;
    fill: ${props => props.error ? props.theme.colors.red : props.theme.colors.green}
  }
`

const ErrorStyled = styled.div`
  font-size: ${props => props.theme.fontSizes.p12};
  color: ${props => props.theme.colors.red};
`

export default function Input(props) {
    const {
        type,
        name,
        onChange,
        onBlur,
        value,
        placeholder,
        disabled,
        label,
        error,
        success,
        size = 'large',
        withLabel,
        withStatusIcon
    } = props

    const inputVariant = success && 'success' || error && 'error' || 'default'

    return (
        <>
            {withLabel && label && <LabelStyled variant='default' htmlFor={name}>{label}</LabelStyled>}
            {withLabel && error && <LabelStyled variant='error'>{error}</LabelStyled>}
            {withLabel && success && <LabelStyled variant='success'>{success}</LabelStyled>}
            <InputWrapStyled size={size} error={error}>
                <InputStyled id={name}
                             type={type}
                             name={name}
                             onChange={onChange}
                             onBlur={onBlur}
                             value={value}
                             placeholder={placeholder}
                             disabled={disabled}
                             error={error}
                             size={size}
                             variant={inputVariant}/>
                {withStatusIcon && error && <CloseIcon width={24} height={24}/>}
                {withStatusIcon && success && <TickIcon width={24} height={24}/>}
            </InputWrapStyled>
            {error && <ErrorStyled variant='error'>{error}</ErrorStyled>}
        </>
    )
}