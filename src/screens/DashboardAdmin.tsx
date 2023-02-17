
import * as yup from 'yup'
import { Center, Heading, Icon, NativeBaseProvider, VStack, Image, ScrollView } from "native-base";
import { Button } from "../components/Button";

import { LinearGradient } from 'expo-linear-gradient';


export default function DashboardAdmin() {

  return (
    <NativeBaseProvider>
        <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']} style={{flex: 1}}>
            <ScrollView w={["350", "350"]} h="20">
                <VStack flex={1} px={5}>
                    <Center h='full'>
                        <Button title='Realizar auditoria' mb={3}/>
                        <Button title='Trocar tipo de acesso do usuário' mb={3}/>
                        <Button title='Cadastro de usuário' mb={3}/>
                        <Button title='Cadastro de checklist' mb={3}/>
                        <Button title='Consulta de checklist' mb={3}/>
                        <Button title='Cadastro de perguntas' mb={3}/>
                        <Button title='Consulta de perguntas' mb={3}/>
                        <Button title='Cadastro de checklist/perguntas' mb={3}/>
                        <Button title='Cadastro de áreas' mb={3}/>
                        <Button title='Sair da conta' mb={3}/>
                    </Center>
                </VStack>
            </ScrollView>
        </LinearGradient>
    </NativeBaseProvider>
  );
}
