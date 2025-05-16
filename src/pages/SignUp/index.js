import React, { useContext, useState } from "react";
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform} from 'react-native';

import styles from '../SignIn/styles';

import { AuthContext } from '../../contexts/auth';

export default function SignUp(){

    const { signUp } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp(){
        signUp(name, email, password);
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
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>
                <View style={styles.areaInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Seu email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.areaInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity style={styles.submitButton} activeOpacity={0.8} onPress={handleSignUp}>
                    <Text style={styles.submitButtonText}>Cadastrar</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    )
}