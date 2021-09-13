import styled from "@emotion/styled";
import {flashing} from "../shared/keyframes";

const DotsLoaderStyled = styled.div`
  position: relative;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.red};

  animation: ${flashing} 0.5s infinite linear alternate;
  animation-delay: .25s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    left: -6px;

    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.red};

    animation: ${flashing} 0.5s infinite alternate;
    animation-delay: 0s;
  }

  &::after {
    left: 6px;

    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.red};
    color: ${props => props.theme.colors.red};

    animation: ${flashing} 0.5s infinite alternate;
    animation-delay: .5s;
  }
`

export default function DotsLoader() {
    return (
        <DotsLoaderStyled/>
    )
}