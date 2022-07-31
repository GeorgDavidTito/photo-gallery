import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions, Easing } from 'react-native';
const { width } = Dimensions.get('window');

const RotateInView = props => {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start();
  }, []);

  const translateX = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [width, 1],
  });

  const opacity = rotateAnim;

  return (
    <Animated.View
      style={[{ opacity, transform: [{ translateX }] }, props.containerStyle]}>
      {props.children}
    </Animated.View>
  );
};

export default RotateInView;
