import { actionTypes } from './actions';

const initialState = {
  list: [],
  pageTotal: 0,
  currentPage: 0,
};

function images(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PHOTOS_RESET:
      return {
        ...state,
        list: [],
        pageTotal: 0,
        currentPage: 0,
      };
    case actionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        list: state.list?.concat(action?.data?.results),
        pageTotal: action?.data.total / 10,
        currentPage: state?.currentPage + 1,
      };
    case actionTypes.FETCH_PHOTOS_ERROR:
      return { ...state };
    default:
      return state;
  }
}

export default images;
