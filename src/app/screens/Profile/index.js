import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getUserPhotos } from '../../../redux/user/actions';
import styles from './styles';
import blackBack from '../../../assets/vector-black.png';
import Back from '../../components/Back';
import UserAvatar from '../../components/UserAvatar';
import Photo from '../../components/Photo';
import Loading from '../../components/Loading';

const Profile = ({ navigation}) => {
  const dispatch = useDispatch();
  const {goBack} = navigation;
  //const { item } = props.route.params;
  const { selectedUser, photos, pageTotal } = useSelector((state) => state?.user);
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [viewable, setViewable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const renderItem = (props) => <Photo  {...props} />;

  const loadPage = async (pageNumber = page, shouldRefresh = false) => {
    if (loading) {
      return;
    }
    setLoading(true);
    if (pageNumber < pageTotal && !shouldRefresh) {
      await dispatch(getUserPhotos( selectedUser?.username,pageNumber + 1));
    } else {
      const data = photos?.slice(pageNumber * 10, pageNumber * 10 + 10);
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

  return (
    <SafeAreaView style={styles.container}>
        <Back goBack={goBack} imageSource={blackBack}/>
        <UserAvatar avatarSize={80} imageSource={{uri: selectedUser?.profile_image?.small}} name={selectedUser?.name} nameStyle={styles.titleStyle} descriptionStyle={styles.descriptionStyle} description={selectedUser?.bio}/>
        <Text style={styles.title}>My Photos</Text>
        <View style={styles.listContainer}>
           <FlatList
            key="userPhotos"
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
      </SafeAreaView>
  );
};

export default Profile;
