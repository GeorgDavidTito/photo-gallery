import * as UnSplashServices from '../../services/UnSplashServices';

export const actionTypes = {
  FETCH_PHOTOS_REQUEST: 'FETCH_PHOTOS_REQUEST',
  FETCH_PHOTOS_SUCCESS: 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR: 'FETCH_PHOTOS_ERROR',
  FETCH_PHOTOS_RESET: 'FETCH_PHOTOS_RESET',
};

function loadPhotosRequest() {
  return {
    type: actionTypes.FETCH_PHOTOS_REQUEST,
  };
}

function loadPhotosSuccess(results) {
  return {
    type: actionTypes.FETCH_PHOTOS_SUCCESS,
    data: results,
    error: null,
  };
}

function loadPhotosError(error) {
  return {
    type: actionTypes.FETCH_PHOTOS_ERROR,
    data: null,
    error: error,
  };
}

export const getPhotos = (page=1) => async (dispatch) => {
  dispatch(loadPhotosRequest());
  try {
    const response = await UnSplashServices.getPhotos(page);
    if (response.status === 200) {
      dispatch(loadPhotosSuccess(response?.response));
    } else {
      dispatch(loadPhotosError(response.error));
    }
  } catch (error) {
    dispatch(loadPhotosError('No pudimos obtener la lista de fotos'));
  }
};
