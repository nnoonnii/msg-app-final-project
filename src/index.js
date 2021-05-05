import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, {defaultState} from "./reducer";
import {StateProvider} from "./StateProvider"


ReactDOM.render(
  <React.StrictMode>

    <StateProvider defaultState={defaultState} reducer={reducer}>
      <App />
    </StateProvider>
      
  </React.StrictMode>,
  document.getElementById('root')
);


