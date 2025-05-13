import React from "react";
import {View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Platform} from 'react-native'
import styles from "./styles";
import { useNavigation } from '@react-navigation/native' //vamos usar para direcionar para a nossa página de "SignUp"


export default function SignIn(){
    const navigation = useNavigation();

    return(
        <View style={styles.background}>
            <KeyboardAvoidingView  //isso aqui que faz a tela subir quando abre o teclado (funciona de boa no android, já no IOS precisa configurar)
                behavior={Platform.OS === 'ios' ? 'padding' : ''} //para o IOS
                enabled  //ative
                style={styles.container}
            >
                <Image
                style={styles.logo}
                source={require('../../assets/Logo.png')} />
                <View style={styles.areaInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu email"
                    />
                </View>
                <View style={styles.areaInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                    />
                </View>
                    {/*esse "activeOpacity tira a opaciadade do Touchable, sendo 1 igual a 100%" */}
                <TouchableOpacity style={styles.submitButton} activeOpacity={0.8}>
                    <Text style={styles.submitButtonText}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.link}>
                    <Text style={styles.linkText}>Criar uma conta!</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>

        </View>
    )
}