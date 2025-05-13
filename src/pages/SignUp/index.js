import React, {useContext} from "react";
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform} from 'react-native';

import styles from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){

    const { user } = useContext(AuthContext);

    function handleSignUp(){
        console.log(user.name);
    }

    return(
        <View style={styles.background}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
                style={styles.container}
            >

                <View style={styles.areaInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                    />
                </View>
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

                <TouchableOpacity style={styles.submitButton} activeOpacity={0.8} onPress={handleSignUp}>
                    <Text style={styles.submitButtonText}>Cadastrar</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    )
}