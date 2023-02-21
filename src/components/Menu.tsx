import { Menu as NativeBaseMenu, IMenuProps, IMenuItemProps, Pressable } from "native-base";
import { List } from "phosphor-react-native";


type Props =  IMenuProps & {
}

type PropsItem =  IMenuItemProps & {
    text: string[];
}

export function Menu({text, ...restItem}: PropsItem) {
    return (
        <NativeBaseMenu trigger={triggerProps => {
            return (
                <Pressable {...triggerProps}>
                    <List/>
                </Pressable>
            )
        }}>
            <NativeBaseMenu.Item {...restItem}>
                {text[]}
            </NativeBaseMenu.Item>
        </NativeBaseMenu>
    );
}


