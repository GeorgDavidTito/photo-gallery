import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotos } from '../../../redux/user/actions';
import blackBack from '../../../assets/vector-black.png';
import Back from '../../components/Back';
import UserAvatar from '../../components/UserAvatar';
import Photo from '../../components/Photo';
import PhotoList from '../../components/PhotoList';
import RotateInView from '../../components/RotateInView';
import styles from './styles';
import FadeInView from '../../components/FadeInView';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const { goBack } = navigation;
  const { selectedUser, photos, pageTotal } = useSelector(state => state?.user);
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = props => <Photo {...props} />;

  const loadPage = async (pageNumber = page, shouldRefresh = false) => {
    if (loading) {
      return;
    }
    setLoading(true);
    if (pageNumber < pageTotal && !shouldRefresh) {
      await dispatch(getUserPhotos(selectedUser?.username, pageNumber + 1));
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
    if (photos?.length === 0 && selectedUser?.username) {
      dispatch(getUserPhotos(selectedUser?.username));
    }
  }, []);
  console.log('profile', selectedUser);

  return (
    <SafeAreaView style={styles.container}>
      <Back goBack={goBack} imageSource={blackBack} />
      <RotateInView containerStyle={{ height: 100, marginTop: 70 }}>
        <UserAvatar
          avatarSize={80}
          imageSource={{ uri: selectedUser?.profile_image?.small }}
          name={selectedUser?.name}
          nameStyle={styles.titleStyle}
          descriptionStyle={styles.descriptionStyle}
          description={selectedUser?.bio || ' '}
        />
      </RotateInView>
      <FadeInView>
        <Text style={styles.title}>My Photos</Text>
      </FadeInView>
      <PhotoList
        id="userPhotos"
        feed={feed}
        renderItem={renderItem}
        refreshList={refreshList}
        refreshing={refreshing}
        loading={loading}
        loadPage={loadPage}
      />
    </SafeAreaView>
  );
};

export default Profile;
