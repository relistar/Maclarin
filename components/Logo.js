import logo from '../public/images/logo.png'
import logoCircle from '../public/images/logo_circle.png'
import Image from 'next/image'
import styled from "@emotion/styled";
import {Box, Flex} from "rebass";
import theme from "../shared/theme";

const LogoTextStyled = styled.span`
  font-size: ${props => props.theme.fontSizes.p16};
  font-weight: ${props => props.theme.fontWeights.bold};
  width: 230px;
  line-height: 19px;
  margin-left: 35px;
  color: ${props => props.theme.colors.white};
  display: block;
  text-transform: uppercase;
`

export default function Logo() {
    return (
        <Flex alignItems='center'>
            <Box theme={theme} variant='logo.big'>
                <Image src={logo} alt='Логотип' width={188} height={56}/>
            </Box>
            <Box theme={theme} variant='logo.small'>
                <Image src={logoCircle} alt='Логотип' width={58} height={58}/>
            </Box>
            <Box theme={theme} variant='logo.big.text'>
                <LogoTextStyled>Ремесленные продукты холдинга Афанасий</LogoTextStyled>
            </Box>
        </Flex>
    )
}