import * as React from "react";
import * as yup from 'yup'
import { Center, Heading, Icon, useColorModeValue, VStack, Image, Pressable,
    Checkbox as NativeBaseCheckbox,
    Select as NativeBaseSelect
} from "native-base";
import { Button } from "../components/Button";
import  { Input } from '../components/Input';
import {  Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import { Envelope, Key, SignIn, EyeSlash, Eye, Check } from 'phosphor-react-native'
import { LinearGradient } from 'expo-linear-gradient';
import ThemeToggle from "../components/Theme-toggle";
import Checkbox from "../components/Checkbox";
import Select from "../components/Select";

type FormDataProps = {
    email: string
    password: string
}

const signUpSchema = yup.object({
    email: yup.string().required('Informe o email').email('Email inválido'),
    password: yup.string().required('Informe o senha').min(6, 'A senha tem que ter pelo menos 6 digítos'),
})


export default function MainScreen() {
    const img = require('../../images/LogoKrah.png');
    const { control, handleSubmit, formState: {errors} } = useForm<FormDataProps>({ resolver: yupResolver(signUpSchema) });
    const [show, setShow] = React.useState(false);
    const [groupValue, setGroupValue] = React.useState([]);
    const [service, setService] = React.useState("");

    function handelSingIn(data: FormDataProps) {
        console.log(data)
    }

    return (

            <Center flex={1} h='full' _dark={{ bg: "dark.100"}} _light={{ bg: "white"}}>
                <VStack>
                    <Center h={'510px'} w={'350px'} >

                        <Image alt='Logo Krah' source={img} size={150}/>
                        <Heading mb={'50px'} mt={'50px'}>
                            Faça o login da sua conta
                        </Heading>

                        <NativeBaseSelect placeholder="Ola" minWidth="200"  _selectedItem={{bg: "teal.600", endIcon: <Check size="5" />
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select label="teste1" value="teste"/>
                        </NativeBaseSelect>
                        
                        <Controller control={control}
                            name='email'
                            render={({ field : { onChange }}) => (
                                <Input placeholder="Email" onChangeText={onChange} errorMessage={errors.email?.message}
                                InputLeftElement={<Icon as={<Envelope/>} size={16} ml='2' color="muted.400"/>} />
                            )}
                        />

                        <Controller control={control}
                            name='password'
                            render={({ field : { onChange }}) => (
                                <Input placeholder="Senha" onChangeText={onChange} errorMessage={errors.password?.message}
                                InputLeftElement={<Icon as={<Key/>} size={16} ml='2' color="muted.400"/>} type={show ? 'text' : 'password'}
                                InputRightElement={<Pressable onPress={() => setShow(!show)}>
                                    <Icon as={show ? <Eye/> : <EyeSlash/>} size={16} mr='3' color="muted.400"/>
                                </Pressable>}/>
                            )}
                        />

                        <Button title="Logar" onPress={handleSubmit(handelSingIn)} leftIcon={<Icon as={<SignIn/>} size={16} color="muted.400"/>}/>
                    </Center>
                </VStack>
            </Center>
    );
}