// import statement for context helpers
import React, { createContext, useContext, useReducer } from "react";

// create the data layer for the application
export const StateContext = createContext();

// wrap out app and provide the data layer for every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);
