import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Back from '../../../components/Back';
import FadeInView from '../../../components/FadeInView';
import UserAvatar from '../../../components/UserAvatar';
import styles from './styles';
import back from '../../../../assets/vector.png';

const PhotoBackground = ({ item, goBack, goTo }) => {
  return (
    <ImageBackground
      style={styles.imageBackground}
      source={{ uri: item?.urls?.regular }}
      resizeMode="cover">
      <Back goBack={goBack} imageSource={back} />
      <View style={styles.descriptionContainer}>
        <FadeInView>
          <Text style={styles.descriptionTitle}>
            {item.description || 'Descripcion'}
          </Text>
          <Text style={styles.likes}>{item?.likes} likes</Text>
          <UserAvatar
            goTo={goTo}
            name={item.user?.name}
            imageSource={{ uri: item?.user?.profile_image?.small }}
          />
        </FadeInView>
      </View>
    </ImageBackground>
  );
};

export default PhotoBackground;
