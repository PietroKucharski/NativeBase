import * as yup from 'yup'
import { Center, Heading, Icon, NativeBaseProvider, VStack } from "native-base";
import { Button } from "../components/Button";
import  { Input } from '../components/Input';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { User, Envelope, Key, SignIn } from 'phosphor-react-native'

type FormDataProps = {
    name: string
    email: string
    password: string
    confirm_password: string
}

const signUpSchema = yup.object({
    name: yup.string().required('Informe o nome'),
    email: yup.string().required('Informe o email').email('Email inválido'),
    password: yup.string().required('Informe o senha').min(6, 'A senha tem que ter pelo menos 6 digítos'),
    confirm_password: yup.string().required('Informe a confirmação de senha').min(6, 'A senha tem que ter pelo menos 6 digítos')
    .oneOf([yup.ref('password')], 'A confirmação de senha não é igual'),
})

export default function SingUp() {
    const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({ resolver: yupResolver(signUpSchema) });

    function handelSingUp(data: FormDataProps) {
        console.log(data)
    }

  return (
    <NativeBaseProvider>
        <VStack flex={1} px={5}>
            <Center h='full'>

                <Heading my={24}>
                    Crie sua conta
                </Heading>

                <Controller control={control}
                    name='name'
                    render={({ field : { onChange }}) => (
                        <Input placeholder="Nome" onChangeText={onChange} errorMessage={errors.name?.message}
                        InputLeftElement={<Icon as={<User/>} size={16} ml='2' color="muted.400"/>}/> 
                    )}
                />

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

                <Controller control={control}
                    name='confirm_password'
                    render={({ field : { onChange }}) => (
                        <Input placeholder="Confirme sua senha" secureTextEntry onChangeText={onChange}errorMessage={errors.confirm_password?.message}
                        InputLeftElement={<Icon as={<Key/>} size={16} ml='2' color="muted.400"/>}/>
                    )}
                />

                <Button title="Cadastrar" onPress={handleSubmit(handelSingUp)} leftIcon={<Icon as={<SignIn/>} size={16} color="muted.400"/>}/>
            </Center>
        </VStack>
    </NativeBaseProvider>
  );
}
