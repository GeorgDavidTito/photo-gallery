import api from '../config/api';

export const getPhotos = async (page=1) => {
  const list = await api.photos.list({page:page,perPage:10});
  return list?.response?.results;
  //console.log('list',list?.response?.results[0].user?.profile_image);
};