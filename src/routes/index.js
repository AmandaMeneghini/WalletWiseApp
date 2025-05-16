import React from 'react';
import {View, ActivityIndicator} from 'react-native'
import AuthRoutes from './auth.routes';
import BootSplash from 'react-native-bootsplash'

function Routes(){

    const loading = false;
    const signed = false;

    return(
        signed ? <View></View> : <AuthRoutes />
    )
}

export default Routes;