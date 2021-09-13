import {PlusIcon} from "./Icon";
import theme from "../shared/theme";
import {Box, Flex} from "rebass";

export default function AddButton() {
    return (
        <Flex theme={theme} variant={'addButton'}>
            <Box theme={theme} variant={'addButton.text'}>Добавить позицию</Box>
            <PlusIcon width={18} height={18} fill={theme.colors.green}/>
        </Flex>
    )
}