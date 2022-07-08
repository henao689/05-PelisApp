import {Animated, Button, StyleSheet, View} from 'react-native';
import React from 'react';
import useFade from '../hooks/useFade';

export default function FadeScreen() {
  const {opacity, fadeIn, fadeout} = useFade();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          backgroundColor: '#084f6a',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity: opacity,
        }}
      />

      <Button title="FadeIn" onPress={() => fadeIn()} />
      <Button title="FadeOut" onPress={fadeout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    backgroundColor: '#084f6a',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
  },
});
