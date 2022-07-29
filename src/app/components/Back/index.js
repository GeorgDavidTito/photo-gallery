import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Back = ({ goBack, imageSource }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={goBack}>
      <Image style={styles.backImage} source={imageSource} />
    </TouchableOpacity>
  );
};

export default Back;
