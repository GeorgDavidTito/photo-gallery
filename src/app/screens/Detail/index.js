import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import { getPhotos } from '../../../redux/photos/actions';
import { useSelector } from 'react-redux';
import Carousel from './Carousel';

const Detail = props => {
  const { list: photos } = useSelector(state => state?.photos);
  const { index } = props.route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Carousel data={photos} index={index} {...props} />
    </SafeAreaView>
  );
};

export default Detail;
