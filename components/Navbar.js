import theme from "../shared/theme";
import {Box, Flex} from "rebass";
import Link from "./Link";
import React from "react";
import Button from "./Button";
import {PlusIcon} from "./Icon";

export default function Navbar({showButton}) {
    return (
        <Flex theme={theme}
              variant='navbar'
              justifyContent='space-between'
              alignItems='center'>

            <Flex as={'ul'} theme={theme} variant={'navbar.links'}>
                <Box as={'li'} theme={theme} variant={'navbar.link'}>
                    <Link href={"#"}>Инструкция</Link>
                </Box>

                <Box as={'li'} theme={theme} variant={'navbar.link'}>
                    <Link href={"#"}>Скрипт</Link>
                </Box>
            </Flex>
            {showButton && (
                <Flex theme={theme} variant={'navbar.btn'}>
                    <Button variant="dark" size="xSmall" icon={<PlusIcon/>}>Оформить за клиента</Button>
                </Flex>
            )}
        </Flex>
    )
}