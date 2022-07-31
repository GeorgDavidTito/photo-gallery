import React from 'react';
import { FlatList, Animated, useWindowDimensions, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setSelectedUser } from '../../../../redux/user/actions';
import PhotoBackground from '../PhotoBackground';
import Loading from '../../../components/Loading';

const Carousel = ({
  data,
  refreshList,
  refreshing,
  loadPage,
  loading,
  ...props
}) => {
  const scrollY = new Animated.Value(0);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const getItemLayout = (_, index) => {
    return { length: width, offset: width * index, index };
  };
  const handleGoTo = item => {
    dispatch(setSelectedUser(item?.user));
    props.navigation.navigate('Profile');
  };

  const renderItem = ({ item, index }) => (
    <View style={{ width: width }} key={index}>
      <PhotoBackground
        item={item}
        goTo={() => handleGoTo(item)}
        goBack={() => props.navigation.goBack()}
      />
    </View>
  );

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
      renderItem={renderItem}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ],
        { useNativeDriver: false },
      )}
      scrollEventThrottle={1}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      onRefresh={refreshList}
      refreshing={refreshing}
      onEndReached={() => loadPage()}
      ListFooterComponent={loading && <Loading />}
      initialNumToRender={1}
      maxToRenderPerBatch={2}
    />
  );
};

export default Carousel;
