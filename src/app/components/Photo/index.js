import React, { memo } from 'react';
import { View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Photo= ({item, index, navigate}) => (
  <View style={styles.container}>
  <TouchableOpacity style={[styles.photoContainer, index % 2 != 0?{alignSelf:'flex-end'}: null ]}
    onPress={navigate}>
      <ImageBackground style={styles.image} source={{uri: item?.urls?.regular}}   imageStyle={{ borderRadius: 12}}>
      <LinearGradient colors={['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 1)']}   start={{x: 0.1, y: 0.1}} end={{x: 0, y: 1}} style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>{item.description || 'Descripcion' }</Text>
          <Text style={styles.likes}>{item?.likes} likes</Text>
      </LinearGradient>
      </ImageBackground>
  </TouchableOpacity>
  </View>
);

export default memo(Photo);