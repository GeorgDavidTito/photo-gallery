import React, { useRef } from 'react';
import { Dimensions, Animated, View } from 'react-native';
import Loading from '../Loading';
import styles from './styles';
const { width } = Dimensions.get('screen');

const PhotoList = ({
  id,
  feed,
  renderItem,
  refreshList,
  refreshing,
  loadPage,
  loading,
}) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  customRenderItem = props => {
    const inputRange = [
      -1,
      0,
      (width * 0.25 + 15) * props.index,
      (width * 0.25 + 15) * (props.index + 6),
    ];
    const scale = 1;
    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });
    const Offset = scrollY.interpolate({
      inputRange,
      outputRange: [0, 0, 0, 500],
    });

    return (
      <Animated.View
        style={{
          transform: [{ scale: scale }, { translateX: Offset }],
          opacity: opacity,
          flex: 1,
          alignItems: 'center',
        }}>
        {renderItem(props)}
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        key={id}
        data={feed}
        keyExtractor={(item, index) => `${item?.id}  ${index}`}
        renderItem={customRenderItem}
        numColumns={2}
        horizontal={false}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 15,
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.5}
        onEndReached={() => loadPage()}
        ListFooterComponent={loading && <Loading />}
        initialNumToRender={8}
        maxToRenderPerBatch={6}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      />
    </View>
  );
};

export default PhotoList;
