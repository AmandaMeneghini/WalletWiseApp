import React from 'react';
import { Text, StyleSheet, SafeAreaView} from 'react-native';

export default function App(){
  return(
    <SafeAreaView style={styles.container}>
      <Text>Sujeito programador</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})