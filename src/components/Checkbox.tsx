import { Checkbox as NativeBaseCheckbox, ICheckboxGroupProps, ICheckboxProps } from "native-base";


type Props = ICheckboxGroupProps & {
    onChange: object | any
    value: Array<string>
}

type PropsCheckbox = ICheckboxProps & {
    value: string | any
    accessibilityLabel: string
    text: string
}

export function Checkbox({...rest}: Props, {text, ...restCheckbox }: PropsCheckbox) {
    return (
        <NativeBaseCheckbox.Group {...rest}>
            <NativeBaseCheckbox {...restCheckbox}>
                {text}
            </NativeBaseCheckbox>
        </NativeBaseCheckbox.Group>
    );
}