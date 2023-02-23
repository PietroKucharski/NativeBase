import { Box, ISelectItemProps, Select as NativeBaseSelect } from "native-base";

type props = ISelectItemProps & {
    label: string;
    value: string;
}

export default function Select({label, value, ...rest}: props) {

    return (
        <NativeBaseSelect.Item label={label} value={value} {...rest}/>
    );
}