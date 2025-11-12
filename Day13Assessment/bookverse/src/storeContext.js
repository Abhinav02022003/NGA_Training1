import React, { createContext } from "react";
import BookStore from "./flux/store";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={BookStore}>
      {children}
    </StoreContext.Provider>
  );
};
