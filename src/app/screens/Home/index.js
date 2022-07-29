import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../../../redux/photos/actions';
import Photo from '../../components/Photo';
import Loading from '../../components/Loading';
import styles from './styles';

const Home = props => {
  const dispatch = useDispatch();
  const { list: photos, pageTotal } = useSelector(state => state?.photos);
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { navigation } = props;

  const renderItem = props => (
    <Photo
      {...props}
      navigate={() =>
        navigation.navigate('Detail', { item: props.item, index: props.index })
      }
    />
  );

  const loadPage = async (pageNumber = page, shouldRefresh = false) => {
    if (loading) {
      return;
    }
    setLoading(true);
    if (pageNumber < pageTotal && !shouldRefresh) {
      await dispatch(getPhotos(pageNumber + 1));
    } else {
      const data = photos?.slice(pageNumber * 10, pageNumber * 10 + 10);
      setFeed(feed => (shouldRefresh ? data : [...feed, ...data]));
    }
    setPage(page => page + 1);
    setLoading(false);
  };

  const refreshList = () => {
    setRefreshing(true);
    setPage(0);
    setFeed([]);
    loadPage(0, true);
    setRefreshing(false);
  };

  useEffect(() => {
    if (photos?.length > 0) {
      setFeed(photos);
    }
  }, [photos]);

  useEffect(() => {
    if (photos?.length === 0) {
      dispatch(getPhotos());
    }
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        key="photos"
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

export default Home;
