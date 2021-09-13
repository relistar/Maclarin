import theme from "../shared/theme";
import {Box, Flex} from "rebass";
import Link from "./Link";

export default function Footer() {
    return (
            <Flex as='footer' theme={theme} variant='footer' alignItems='center' justifyContent="space-between">
                <Link href="https://www.maclarin.ru/" target="_blank">maclarin.ru</Link>
                <Box theme={theme} variant={'footer.copyright'}>ВСЕ ПРАВА ЗАЩИЩЕНЫ, 2021</Box>
            </Flex>
    )
}