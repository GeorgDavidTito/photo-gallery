import { actionTypes } from './actions';

const initialState = {
  list: [],
  count: null,
  next: null,
};

function images(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_PHOTOS_RESET:
      return {
        ...state,
        list: [],
      };
    case actionTypes.FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        list: state.list?.concat(action?.data),
        count: action?.data.count,
        next: action?.data.next,
      };
    case actionTypes.FETCH_PHOTOS_ERROR:
      return { ...state };
    case actionTypes.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        list: action?.data,
      };
    case actionTypes.FETCH_SEARCH_ERROR:
      return { ...state, searchSuccess: null };
    default:
      return state;
  }
}

export default images;
