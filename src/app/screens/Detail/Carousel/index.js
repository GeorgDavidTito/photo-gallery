import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, FlatList, Animated } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedUser } from '../../../../redux/user/actions';
import PhotoBackground from '../PhotoBackground';

const { width } = Dimensions.get('window');

const Carousel = ({ data, ...props }) => {
  const scrollX = new Animated.Value(0);
  const flatListRef = useRef();

  const dispatch = useDispatch();
  const { list: photos, pageTotal } = useSelector(state => state?.photos);
  const getItemLayout = (_, index) => {
    return { length: width, offset: width * index, index };
  };
  const handleGoTo = item => {
    dispatch(setSelectedUser(item?.user));
    props.navigation.navigate('Profile');
  };

  return (
    <FlatList
      key="carousel"
      data={data}
      initialScrollIndex={props.index}
      keyExtractor={(item, index) => `${item?.id}  ${index}`}
      horizontal
      pagingEnabled
      scrollEnabled
      snapToAlignment="start"
      decelerationRate={'fast'}
      showsHorizontalScrollIndicator={false}
      getItemLayout={getItemLayout}
      renderItem={({ item }) => (
        <PhotoBackground
          item={item}
          goTo={() => handleGoTo(item)}
          goBack={() => props.navigation.goBack()}
        />
      )}
      /*                     onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                    )} */
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      /*
                    onRefresh={refreshList}
                    refreshing={refreshing}
                    onEndReached={() => loadPage()} 
                    ListFooterComponent={loading && <Loading />} */
      initialNumToRender={1}
      maxToRenderPerBatch={1}
    />
  );
};

export default Carousel;
