import { actionTypes } from './actions';

const initialState = {
  selectedUser: {},
  photos: [],
};

function user(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action?.data,
      };
    case actionTypes.FETCH_USER_PHOTOS_RESET:
      return {
        ...state,
        photos: [],
        pageTotal: 0,
        currentPage: 0,
      };
    case actionTypes.FETCH_USER_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: state.photos?.concat(action?.data?.results),
        pageTotal: action?.data.total / 10,
        currentPage: action?.data.currentPage + 1,
      };
    case actionTypes.FETCH_USER_PHOTOS_ERROR:
      return { ...state };
    default:
      return state;
  }
}

export default user;
