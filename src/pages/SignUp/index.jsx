import React from "react";
import {View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, Platform} from 'react-native'

import styles from '../SignIn/styles'


export default function SignUp(){
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

                <TouchableOpacity style={styles.submitButton} activeOpacity={0.8}>
                    <Text style={styles.submitButtonText}>Cadastrar</Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        </View>
    )
}