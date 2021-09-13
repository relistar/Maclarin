import {keyframes} from '@emotion/react'
import theme from "./theme";
import {lighten} from "polished";

export const flashing = keyframes`
  0% {
    background-color: ${theme.colors.red};
  }
  
  50% {
    background-color: ${lighten(0.1, theme.colors.red)};
  }
  
  100% {
    background-color: ${lighten(0.2, theme.colors.red)};
  }
`