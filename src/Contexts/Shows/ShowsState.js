import {useReducer} from "react";
import axios from "axios";
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import {CLEAR_SINGLE_SHOWS, SEARCH_SHOWS, SET_LOADING, SET_SINGLE_SHOWS,} from "../types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  //search shows function
  const searchShows = async (searchTerm) => {
    dispatch({type: SET_LOADING});
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const {data} = response;
    // console.log(data);
    dispatch({
      type: SEARCH_SHOWS,
      payload: data
    })
  }
  //get single shows
  const getSingleShow = async (id) => {
    dispatch({
      type: SET_LOADING
    })
    const {data} = await axios.get(`http://api.tvmaze.com/shows/${id}`);
    // console.log('single data--->', data)
    dispatch({
      type: SET_SINGLE_SHOWS,
      payload: data
    })
  }

  //clear the single show
  const clearSingleShow = () => {
    dispatch({
      type: CLEAR_SINGLE_SHOWS
    })
  }

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows, getSingleShow, clearSingleShow
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
