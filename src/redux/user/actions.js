import * as UnSplashServices from '../../services/UnSplashServices';

export const actionTypes = {
  SET_SELECTED_USER: 'SET_SELECTED_USER',
  FETCH_USER_PHOTOS_REQUEST: 'FETCH_USER_PHOTOS_REQUEST',
  FETCH_USER_PHOTOS_SUCCESS: 'FETCH_USER_PHOTOS_SUCCESS',
  FETCH_USER_PHOTOS_ERROR: 'FETCH_USER_PHOTOS_ERROR',
};

export function setSelectedUser(user) {
  return {
    type: actionTypes.SET_SELECTED_USER,
    data: user,
    error: null,
  };
}

function loadUserPhotosRequest() {
  return {
    type: actionTypes.FETCH_USER_PHOTOS_REQUEST,
  };
}

function loadUserPhotosSuccess(results) {
  return {
    type: actionTypes.FETCH_USER_PHOTOS_SUCCESS,
    data: results,
    error: null,
  };
}

function loadUserPhotosError(error) {
  return {
    type: actionTypes.FETCH_USER_PHOTOS_ERROR,
    data: null,
    error: error,
  };
}

export const getUserPhotos = (username, page=1) => async (dispatch) => {
  dispatch(loadUserPhotosRequest());
  try {
    const response = await UnSplashServices.getUserPhotos(username,page);
    if (response.status === 200) {
      dispatch(loadUserPhotosSuccess(response?.response));
    } else {
      dispatch(loadUserPhotosError(response.error));
    }
  } catch (error) {
    dispatch(loadUserPhotosError('No pudimos obtener la lista de fotos'));
  }
};
