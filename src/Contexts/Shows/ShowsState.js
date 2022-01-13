import {useReducer} from "react";
import axios from "axios";
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import {SEARCH_SHOWS, SET_LOADING,} from "../types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  const seacrchShows = async () => {
    dispatch({type: SET_LOADING});
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=blinders`);
    console.log(response)
    dispatch({
      type:SEARCH_SHOWS,
      payload:response
    })
  }


  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading, seacrchShows
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
