import styled from "@emotion/styled";
import {MinusIcon, PlusIcon} from "./Icon";
import theme from "../shared/theme";
import {Box, Flex} from "rebass";

const InputNumberStyled = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 89px !important;
  height: ${props => props.withoutButtons ? '34px !important' : '26px !important'};
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`

const InputStyled = styled.input`
  width: ${props => props.withoutButtons ? '89px !important' : '33px !important'};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.p14};
  color: ${props => props.theme.colors.black40};
  caret-color: ${props => props.theme.colors.black40};
  line-height: 120%;
  background: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.colors.black40};
  }
`

const MinusStyled = styled.button`
  width: 18px;
  height: 26px;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;

    svg path {
      fill: ${props => props.theme.colors.green};
    }
  }

  svg {
    margin-top: 12px;
  }
`

const PlusStyled = styled.button`
  width: 18px;
  height: 26px;
  background: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;

    svg path {
      fill: ${props => props.theme.colors.green};
    }
  }

  svg {
    margin-right: -3px;
  }
`

export default function InputNumber(props) {
    const {editable = true, withoutButtons = false, onChangeHandler, onChangeInputHandler, min = 0, max = Number.MAX_VALUE, step} = props

    function change(event) {
        let value = +event.target.value;

        value = Math.round((value + Number.EPSILON) * 100) / 100;

        if (value < 0) {
            value = 0
        }

        callInputChange(value)
    }

    function stabValue(value) {
        if (value < 0) {
            value = min
        }
        if (value > max) {
            value = max
        }

        return Math.round((value + Number.EPSILON) * 100) / 100;
    }

    function callButtonsChange(value) {
        let number = stabValue(value);

        onChangeHandler(+number)
    }

    function callInputChange(value) {
        let number = stabValue(value);

        onChangeInputHandler(+number)
    }

    function minus() {
        let value = Math.round((+props.value + Number.EPSILON) * 100) / 100;
        value -= step

        if (value < min) {
            value = min
        }

        callButtonsChange(value)
    }

    function plus() {
        let value = Math.round((+props.value + Number.EPSILON) * 100) / 100;
        value += step
        callButtonsChange(value)
    }

    return (<>
            {editable ? (
                <Flex theme={theme} variant={'inputNumber.notEditable'} flexDirection={'column'} alignItems={'center'}>
                    <InputNumberStyled {...props}>
                        {!withoutButtons && (
                            <MinusStyled onClick={minus}><MinusIcon width={16} height={16}
                                                                    fill={theme.colors.gray}/></MinusStyled>)}
                        <InputStyled type="number" value={props.value}  {...props} onChange={change}/>
                        {!withoutButtons && (
                            <PlusStyled onClick={plus}><PlusIcon width={16} height={16}
                                                                 fill={theme.colors.gray}/></PlusStyled>)}
                    </InputNumberStyled>

                    <Box theme={theme} variant={'inputNumber.notEditable.uom'}>{props.dataUom}</Box>
                </Flex>
            ) : (
                <Flex theme={theme} variant={'inputNumber.notEditable'} flexDirection={'column'} alignItems={'center'}>
                    <Box theme={theme} variant={'inputNumber.notEditable.title'}>{props.dataTitle}</Box>
                    <Box theme={theme} variant={'inputNumber.notEditable.value'}>{props.value}</Box>
                    <Box theme={theme} variant={'inputNumber.notEditable.uom'}>{props.dataUom}</Box>
                </Flex>
            )}
        </>
    )

}