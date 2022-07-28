import React, { useRef } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  View
} from 'react-native';
import styles from './styles';
import { getPhotos } from '../../../redux/photos/actions';
import { useDispatch, useSelector } from 'react-redux';
import back from '../../../assets/vector.png';


const Detail = (props) => {
  let refRBSheet = useRef();
  const dispatch = useDispatch();
  const { list:photos } = useSelector((state) => state?.photos);
  const { item } = props.route.params;
console.log('image',item);
  const handleGetPilots = () => {
    refRBSheet.current.open();
    dispatch(getPhotos(item?.pilots));
  };

  return (
      <SafeAreaView style={styles.container}>
           <ImageBackground style={styles.imageBackground} source={{uri: item?.urls?.regular}} resizeMode="cover">
              <TouchableOpacity style={styles.backContainer} onPress={() => props.navigation.goBack()}>
                <Image style={styles.backImage} source={back}/>
              </TouchableOpacity>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionTitle}>{item.description || 'Descripcion' }</Text>
                <Text style={styles.likes}>{item?.likes} likes</Text>
                <TouchableOpacity style={styles.userContainer} onPress={() => props.navigation.navigate('Home')}>
                  <Image style={styles.userAvatar} source={{uri: item?.user?.profile_image?.small}} resizeMode="cover" />
                  <View>
                    <Text style={styles.userName}>{item.user?.name }</Text>
                    <Text style={styles.viewProfile}>View Profile</Text>
                  </View>
              </TouchableOpacity>
              </View>

           </ImageBackground>
      </SafeAreaView>
  );
};

export default Detail;
