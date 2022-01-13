import React, {useReducer} from "react";
import AlertContext from './alertsContext';
import AlertReducer from './alertsReducer'
import {REMOVE_ALERT, SET_ALERT} from "../types";

const AlertsState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState)

  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        message, type
      }
    })
    setTimeout(()=>dispatch({type:REMOVE_ALERT}),3000)
  }


  return (
    <AlertContext.Provider value={{
      alert: state,
      setAlert
    }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertsState;
