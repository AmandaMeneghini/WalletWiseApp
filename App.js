import React, { useState, useCallback } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/index';
import AnimatedBootSplashComponent from './src/components/AnimatedBootSplash';

export default function App() {
  const [bootSplashIsVisible, setBootSplashIsVisible] = useState(true);
  const [isAppReady, setIsAppReady] = useState(false);

  const onAnimationEnd = useCallback(() => {
    setBootSplashIsVisible(false);
  }, []);

  const onNavigationReady = () => {
    setIsAppReady(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
      <NavigationContainer onReady={onNavigationReady}>
        <Routes />
      </NavigationContainer>

      {bootSplashIsVisible && (
        <AnimatedBootSplashComponent
          isReady={isAppReady}
          onAnimationEnd={onAnimationEnd}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});