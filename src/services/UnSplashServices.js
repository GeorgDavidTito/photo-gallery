import api from '../config/api';

export const getPhotos = async (page) => api.photos.list({page,perPage:10});
