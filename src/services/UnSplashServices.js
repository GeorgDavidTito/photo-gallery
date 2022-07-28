import api from '../config/api';

export const getPhotos = async (page=1) => api.photos.list({page:page,perPage:10});
