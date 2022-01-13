import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ShowsState from "./Contexts/Shows/ShowsState";
import AlertsState from "./Contexts/alerts/AlertsState";

ReactDOM.render(
  <ShowsState>
    <AlertsState>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </AlertsState>
  </ShowsState>,
  document.getElementById('root')
);


