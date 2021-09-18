import theme from "../shared/theme";
import {Box, Flex} from "rebass";
import {default as NextLink} from 'next/link'
import Link from '../components/Link'

export default function Footer({authorized}) {
    return (
        <Flex as='footer' theme={theme} variant='footer' alignItems='center' justifyContent="space-between">
            <Link href="https://www.maclarin.ru/" target="_blank">maclarin.ru</Link>
            <Box theme={theme} variant={'footer.copyright'}>ВСЕ ПРАВА ЗАЩИЩЕНЫ, 2021</Box>
            {authorized && (
                <Box theme={theme} variant={'footer.links'} alignSelf={"center"}>
                    <NextLink href={`/logout`}>
                        <Link href="/logout">Выход</Link>
                    </NextLink>
                </Box>
            )}
        </Flex>
    )
}