
import { Center, NativeBaseProvider, VStack, ScrollView, Heading, Checkbox } from "native-base"
import { LinearGradient } from 'expo-linear-gradient';

import React from "react";
import { Menu } from "../components/Menu";
import { AppBar } from "../components/AppBar";


export default function Teste() {
    const [groupValues, setGroupValues] = React.useState([]);

  return (
    <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']} style={{flex: 1, width: "100%"}}> 
        <Center flexDirection={"row"}>
            <Heading mt={'50px'} mb={'20px'}>Testes</Heading>
        </Center>
        <ScrollView>
            
            <VStack flex={1} px={5}>
                <Center>
                    <AppBar title={"Home"} />
                </Center>
            </VStack>

        </ScrollView>
    </LinearGradient>
  );
}
