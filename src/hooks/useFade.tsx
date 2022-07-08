import {Animated} from 'react-native';
import {useRef} from 'react';

export default function useFade() {
  const opacity = useRef(new Animated.Value(0.01)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));
  };

  const fadeout = () => {
    Animated.timing(opacity, {
      toValue: 0.02,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  return {fadeIn, fadeout, opacity};
}
