import React from 'react';
import { FlatList, View } from 'react-native';
import Loading from '../Loading';
import styles from './styles';

const PhotoList = ({
  id,
  feed,
  renderItem,
  refreshList,
  refreshing,
  loadPage,
  loading,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        key={id}
        data={feed}
        keyExtractor={(item, index) => `${item?.id}  ${index}`}
        renderItem={renderItem}
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
        maxToRenderPerBatch={2}
      />
    </View>
  );
};

export default PhotoList;
