import {CLEAR_SINGLE_SHOWS, SEARCH_SHOWS, SET_LOADING, SET_SINGLE_SHOWS} from '../types'

const showsReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: true}
    case SEARCH_SHOWS:
      return {...state, shows: action.payload, loading: false}
    case SET_SINGLE_SHOWS:
      return {...state, singleShow: action.payload, loading: false}
    case CLEAR_SINGLE_SHOWS:
      return {...state, singleShow: {}}
    default:
      return state;
  }
}
export default showsReducer;