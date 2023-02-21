import { Box, HStack, Pressable, Text } from "native-base";
import { List } from "phosphor-react-native";
import { Menu } from "./Menu";

interface Props {
    title: string;
}

export function AppBar({ title}: Props) {
    return (          
        <Box safeAreaTop bg="violet.600" w="100%">
            <HStack bg="violet.800" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
                <HStack alignItems="center">
                    <Menu children={''} title={""}/>
                    <Text ml='2' color="white" fontSize="20" fontWeight="bold">
                        {title}
                    </Text>
                </HStack>
            </HStack>
        </Box>
    );
}