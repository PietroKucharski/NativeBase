import React from "react";
import { Checkbox as NativeBaseCheckbox, ICheckboxProps, ICheckboxGroupProps, FormControl } from "native-base";

type props = ICheckboxProps & {
    title: string;
    value: string;
}

export default function Checkbox({title, value}: props) {
    return (
        <NativeBaseCheckbox value={value}>
            {title}
        </NativeBaseCheckbox>
    );
}