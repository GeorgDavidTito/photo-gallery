import api from '../config/api';

export const getPhotos = async page => api.photos.list({ page, perPage: 10 });

export const getUserPhotos = async (username, page) =>
  api.users.getPhotos({ username, page, perPage: 10 });
