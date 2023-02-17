import * as yup from 'yup'
import { Center, Heading, Icon, NativeBaseProvider, VStack, Image } from "native-base";
import { Button } from "../components/Button";
import  { Input } from '../components/Input';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { Envelope, Key, SignIn } from 'phosphor-react-native'
import { LinearGradient } from 'expo-linear-gradient';

type FormDataProps = {
    email: string
    password: string
}

const signUpSchema = yup.object({
    email: yup.string().required('Informe o email').email('Email inválido'),
    password: yup.string().required('Informe o senha').min(6, 'A senha tem que ter pelo menos 6 digítos'),
})

export default function SingIn() {
    const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({ resolver: yupResolver(signUpSchema) });

    function handelSingIn(data: FormDataProps) {
        console.log(data)
    }

  return (
    <NativeBaseProvider>
        <LinearGradient colors={['#ffffff', '#ffffff', '#ffffff']} style={{flex: 1}}>
        <VStack flex={1} px={5}>
            <Center h='full'>

                <Heading mb={'50px'}>
                    Faça o login da sua conta
                </Heading>

                <Controller control={control}
                    name='email'
                    render={({ field : { onChange }}) => (
                        <Input placeholder="Email" onChangeText={onChange} errorMessage={errors.email?.message}
                        InputLeftElement={<Icon as={<Envelope/>} size={16} ml='2' color="muted.400"/>}/>
                    )}
                />

                <Controller control={control}
                    name='password'
                    render={({ field : { onChange }}) => (
                        <Input placeholder="Senha" secureTextEntry onChangeText={onChange} errorMessage={errors.password?.message}
                        InputLeftElement={<Icon as={<Key/>} size={16} ml='2' color="muted.400"/>}/>
                    )}
                />

                <Button title="Logar" onPress={handleSubmit(handelSingIn)} leftIcon={<Icon as={<SignIn/>} size={16} color="muted.400"/>}/>
            </Center>
        </VStack>
        </LinearGradient>
    </NativeBaseProvider>
  );
}
