import { Center, NativeBaseProvider, VStack, ScrollView, Heading, Image, Pressable } from "native-base";
import { Button } from "../components/Button";
import { LinearGradient } from 'expo-linear-gradient';

export default function DashboardAdmin() {
    const img = require('../../images/LogoKrah.png');

  return (
    <NativeBaseProvider>
        <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']} style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Center>
                    <Image alt='Logo Krah' source={img} size={150} mt={'75px'} />
                    <Heading mt={'30px'} mb={'40px'}>Escolha uma opção</Heading>

                </Center>
            
                <VStack flex={1} px={5}>
                    <Center>
                        <Button title='Realizar auditoria' mb={3}/>
                        <Button title='Trocar tipo de acesso do usuário' mb={3}/>
                        <Button title='Cadastro de usuário' mb={3}/>
                        <Button title='Cadastro de checklist' mb={3}/>
                        <Button title='Consulta de checklist' mb={3}/>
                        <Button title='Cadastro de perguntas' mb={3}/>
                        <Button title='Consulta de perguntas' mb={3}/>
                        <Button title='Cadastro de checklist/perguntas' mb={3}/>
                        <Button title='Cadastro de áreas' mb={3}/>
                        <Button title='Sair da conta' mb={3} bg={'red.400'} _pressed={{bgColor: 'red.500'}}/>
                    </Center>
                </VStack>
            </ScrollView>
        </LinearGradient>
    </NativeBaseProvider>
  );
}
