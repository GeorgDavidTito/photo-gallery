import React, { useEffect, useState } from 'react';
import {
  FlatList,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {getPhotos} from '../../../redux/photos/actions';
import Photo from '../../components/Photo';

/* import { getShips } from '../../../redux/ships/actions';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../../components/Loading'; */
import styles from './styles';

const Home = (props) => {

  const dispatch = useDispatch();
  const { list:photos } = useSelector((state) => state?.photos);
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const { navigation } = props;

  const renderItem = (props) => {
    console.log('photos',props);

    return (
      <Photo  {...props} navigate={()=> navigation.navigate('Detail', { item: props.item })}/>
/*       <View style={styles.itemContainer}>
      <TouchableOpacity style={[styles.photoContainer, index%2!=0?{alignSelf:'flex-end'}: null ]}
        onPress={() => props.navigation.navigate('Detail', { item })}>
          <Image style={styles.image} source={{uri: item?.urls?.regular}}/>
      </TouchableOpacity>
      </View> */
    );
  };
/*   

  const loadPage = async (pageNumber = page, shouldRefresh = false) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const pageGlobal = next?.split('=');

    if (pageNumber < Number(pageGlobal?.[1]) && !shouldRefresh) {
      await dispatch(getShips(`?page=${pageGlobal?.[1]}`));
    } else {
      const data = ships?.slice(pageNumber * 10, pageNumber * 10 + 10);
      setFeed((feed) => (shouldRefresh ? data : [...feed, ...data]));
    }
    setPage((page) => page + 1);

    setLoading(false);
  };

  const refreshList = () => {
    setRefreshing(true);
    setPage(0);
    setFeed([]);
    loadPage(0, true);
    setRefreshing(false);
  };
  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

*/
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
            keyExtractor={(item) => item?.id}
            renderItem={renderItem}
            numColumns={2}
            horizontal={false} 
            // onViewableItemsChanged={handleViewableChanged}
            viewabilityConfig={{
              viewAreaCoveragePercentThreshold: 15,
            }}
            showsVerticalScrollIndicator={false}
/*             onRefresh={refreshList}
            refreshing={refreshing}
            onEndReachedThreshold={0.5}
            onEndReached={() => loadPage()} 
            ListFooterComponent={loading && <Loading />}*/
            initialNumToRender={8}
            maxToRenderPerBatch={2}
          />
      </View>
  );
};

export default Home;
