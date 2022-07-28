import * as UnSplashServices from '../../services/UnSplashServices';

export const actionTypes = {
  FETCH_PHOTOS_REQUEST: 'FETCH_PHOTOS_REQUEST',
  FETCH_PHOTOS_SUCCESS: 'FETCH_PHOTOS_SUCCESS',
  FETCH_PHOTOS_ERROR: 'FETCH_PHOTOS_ERROR',

  FETCH_SEARCH_REQUEST: 'FETCH_SEARCH_REQUEST',
  FETCH_SEARCH_SUCCESS: 'FETCH_SEARCH_SUCCESS',
  FETCH_SEARCH_ERROR: 'FETCH_SEARCH_ERROR',

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
function loadPhotosReset() {
  return {
    type: actionTypes.FETCH_PHOTOS_RESET,
    data: [],
    error: null,
  };
}

function loadSearchRequest() {
  return {
    type: actionTypes.FETCH_SEARCH_REQUEST,
  };
}

function loadSearchSuccess(results) {
  return {
    type: actionTypes.FETCH_SEARCH_SUCCESS,
    data: results,
    error: null,
  };
}

function loadSearchError(error) {
  return {
    type: actionTypes.FETCH_SEARCH_ERROR,
    data: null,
    error: error,
  };
}

export const getPhotos = (query=1) => async (dispatch) => {
  dispatch(loadPhotosRequest());
  try {
    const response = await UnSplashServices.getPhotos(query);
    if (response.status === 200) {
      dispatch(loadPhotosSuccess(response?.response?.results));
    } else {
      dispatch(loadPhotosError(response.error));
    }
  } catch (error) {
    dispatch(loadPhotosError('No pudimos obtener la lista de fotos'));
  }
};

export const getSearch = (query) => async (dispatch) => {
  dispatch(loadSearchRequest());
  try {

    const response = await UnSplashServices.getPhotos(query);
    if (response.status === 200 && response.data.count > 0) {
      const responsePhotos = await Promise.all(
        response.data?.results[0].films.map((url) => {
          const query = url.split('films/');
          return SwapiService.getPhotos(query[1]).then((res) => {
            return res.data;
          });
        }),
      );
      await dispatch(loadSearchSuccess(responsePhotos));
    } else if (response.status === 200 && response.data.count === 0) {
      const responseShip = await SwapiService.getShips(query);
      if (responseShip.status === 200 && responseShip.data?.count > 0) {
        const responsePhotos = await Promise.all(
          responseShip.data?.results[0].films.map((url) => {
            const query = url.split('films/');
            return SwapiService.getPhotos(query[1]).then((res) => {
              return res.data;
            });
          }),
        );
        await dispatch(loadSearchSuccess(responsePhotos));
      } else {
        dispatch(loadPhotosReset());
      }
    } else {
      dispatch(loadPhotosReset());
      dispatch(loadSearchError(response.error));
    }
  } catch (error) {
    dispatch(
      loadSearchError('No pudimos obtener la lista de peliculas'),
    );
  }
};

export const resetPhotos = () => async (dispatch) => {
  await dispatch(loadPhotosReset());
  dispatch(getPhotos());
};
