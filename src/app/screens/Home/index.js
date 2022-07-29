import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPhotos } from '../../../redux/photos/actions';
import Photo from '../../components/Photo';
import PhotoList from '../../components/PhotoList';

const Home = props => {
  const dispatch = useDispatch();
  const { list: photos, pageTotal } = useSelector(state => state?.photos);
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
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
    <PhotoList
      id={'photos'}
      feed={feed}
      renderItem={renderItem}
      refreshList={refreshList}
      refreshing={refreshing}
      loading={loading}
    />
  );
};

export default Home;
