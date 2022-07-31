import React, { memo } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

const Content = ({
  imageSource,
  name,
  description,
  nameStyle,
  descriptionStyle,
  avatarSize,
}) => (
  <>
    <Image
      style={[
        styles.avatar,
        avatarSize && {
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
        },
      ]}
      source={imageSource}
      resizeMode="cover"
    />
    <View style={styles.descriptionContainer}>
      <Text style={[styles.name, nameStyle]}>{name}</Text>
      <Text style={[styles.description, descriptionStyle]}>
        {description || 'View Profile'}
      </Text>
    </View>
  </>
);

const UserAvatar = props => {
  const { goTo } = props;

  return goTo ? (
    <TouchableOpacity style={styles.container} onPress={goTo}>
      <Content {...props} />
    </TouchableOpacity>
  ) : (
    <View style={styles.viewContainer}>
      <Content {...props} />
    </View>
  );
};

export default memo(UserAvatar);
