import * as actionTypes from '../actionTypes';

const initialState = {
  newsList: [],
  loading: false,
  error: null,
};

export default function newsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.GET_NEWS:
      return {
        ...state,
        loading: true,
        newsList: [],
        error: null,
      };
    case actionTypes.GET_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        newsList: action.payload,
        error: null,
      };
    case actionTypes.GET_NEWS_FAIL:
      return {
        ...state,
        loading: false,
        newsList: [],
        error: action.payload,
      };
    case actionTypes.ADD_NEWS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.ADD_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        newsList: [...state.newsList, action.payload],
        error: null,
      };
    case actionTypes.ADD_NEWS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
