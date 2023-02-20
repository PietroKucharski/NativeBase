
import { Center, NativeBaseProvider, VStack, ScrollView, Heading, Checkbox } from "native-base";
import { Button } from "../components/Button";

import { LinearGradient } from 'expo-linear-gradient';
import React from "react";


export default function Teste() {
    const [groupValues, setGroupValues] = React.useState([]);

  return (
    <NativeBaseProvider>
        <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']} style={{flex: 1}}>
            <Center>
                <Heading mt={'50px'} mb={'20px'}>Teste</Heading>
            </Center>
            <ScrollView bg={'blue.100'}>
                
                <VStack flex={1} px={5}>
                    <Center>
                    <Checkbox.Group onChange={setGroupValues} value={groupValues} accessibilityLabel="choose numbers">
                    <Checkbox value="one" my={2}>
                        UX Research
                    </Checkbox>
                    <Checkbox value="two">Software Development</Checkbox>
                    </Checkbox.Group>
                    </Center>
                </VStack>

            </ScrollView>
        </LinearGradient>
    </NativeBaseProvider>
  );
}
