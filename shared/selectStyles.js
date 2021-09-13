import theme from "./theme";

export const selectStyles = {
    option: () => ({
        width: 'auto',
        color: theme.colors.black60,
        fontSize: theme.fontSizes.p14,
        marginBottom: 13,
        cursor: 'pointer',
        '&:hover': {
            color: theme.colors.orange
        },
        '&:last-child': {
            marginBottom: 0
        }
    }),
    control: () => ({
        display: 'flex',
        border: 'none',
        background: 'none',
        outline: 'none',
        boxShadow: 'none',
        height: 14,
        minHeight: 14,
        justifyContent: 'flex-start',
        cursor: 'pointer',
        ':focus': {
            outline: 'none'
        }
    }),
    singleValue: (provided) => ({
        ...provided,
        fontSize: theme.fontSizes.p14,
        color: theme.colors.green,
        border: 'none',
        background: 'none',
        transform: 'none',
        top: 0,
        position: 'relative',
        borderBottom: `1px solid ${theme.colors.green}`,
        maxWidth: 'none'
    }),
    container: (provided) => ({
        ...provided,
        minWidth: 193,
        height: 14,
        ':focus-visible': {
            outline: 'none'
        }
    }),
    valueContainer: () => ({
        height: 14,
        padding: 0
    }),
    indicatorsContainer: (provided) => ({
        ...provided,
        height: 14,
    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        padding: 0,
        transition: 'all .2s ease',
        transform: state.selectProps.menuIsOpen ? 'rotate(90deg)' : null
    }),
    menu: (provided) => ({
        ...provided,
        display: 'block',
        padding: '14px',
        background: theme.colors.white,
        border: `1px solid ${theme.colors.black10}`,
        borderRadius: 5,
        width: 'auto'
    }),
}