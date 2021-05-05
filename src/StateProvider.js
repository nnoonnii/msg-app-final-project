//Global States
import React, {createContext, useContext, useReducer} from "react";

//The reducer takes any key/value pair and put into the global state object.


//create Context which is where the data layer is
export const StateContext = createContext();

//the data layer where we have higher order components (reducer,...)
//The children is <App/>
export const StateProvider = ({reducer, defaultState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, defaultState)}>
    {children}
    </StateContext.Provider>
);

//pull data from the data layer    

export const useStateValue = () => useContext(StateContext);
