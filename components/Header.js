import {Box, Flex} from "rebass";
import theme from "../shared/theme";
import Logo from "./Logo";
import Button from "./Button";
import {SearchIcon} from "./Icon";

export default function Header({showButton}) {
    return (
        <Flex as='header' theme={theme} variant='header' alignItems='center' justifyContent="space-between">
            <Logo/>
            {showButton && (
                <Box theme={theme} variant={'header.btn'} width={theme.variants.header.btn.width}>
                    <Button variant='secondary' icon={<SearchIcon fill={theme.colors.bej}/>}>Поиск
                        заказов</Button>
                </Box>
            )}
        </Flex>
    )
}
