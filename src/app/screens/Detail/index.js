import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import { getPhotos } from '../../../redux/photos/actions';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from './Carousel';

const Detail = props => {
  const dispatch = useDispatch();
  const {
    list: photos,
    currentPage,
    pageTotal,
  } = useSelector(state => state?.photos);
  const { index } = props.route.params;
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(currentPage);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

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
    <SafeAreaView style={styles.container}>
      <Carousel
        data={feed}
        index={index}
        {...props}
        refreshList={refreshList}
        loadPage={loadPage}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default Detail;
