import React, { createContext, useState } from 'react';
import api from "../services/api";
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext(null);

function AuthProvider({ children }){
    const[user, setUser] = useState({});
    const[loadingAuth, setLoadingAuth] = useState(false);

    const navigation = useNavigation();

    async function signUp(name, email, password) {
        setLoadingAuth(true);
        try {

            const response = await api.post("/users", {
                name: name,
                password: password,
                email: email,
            })

            setLoadingAuth(false);
            navigation.goBack();

        } catch (error) {
            console.log("ERRO AO CADASTRAR", error);
            setLoadingAuth(false);
        }
    }

    return(
        <AuthContext.Provider value={{user, signUp, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;