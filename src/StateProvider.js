// setup data layer
//  We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// This is the data layer
export const StateContext = createContext();

// Build a provider so that we can wrap the entire app to this provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//   This is how we use inside a component
export const useStateValue = () => useContext(StateContext);
