import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/index'
import BootSplash from "react-native-bootsplash";

export default function App(){
  return(
    <NavigationContainer  onReady={() => BootSplash.hide({fade: true})}>
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content"/>
      <Routes />
    </NavigationContainer>
  );
}