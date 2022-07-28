import React, { memo } from 'react';
import { View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './styles';

const Photo= ({item, index, navigate}) => (
  <View style={styles.container}>
  <TouchableOpacity style={[styles.photoContainer, index % 2 != 0?{alignSelf:'flex-end'}: null ]}
    onPress={navigate}>
      <ImageBackground style={styles.image} source={{uri: item?.urls?.regular}}   imageStyle={{ borderRadius: 12}}>
        <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>{item.description || 'Descripcion' }</Text>
        <Text style={styles.likes}>{item?.likes} likes</Text>
        </View>
      </ImageBackground>
  </TouchableOpacity>
  </View>
);

export default memo(Photo);