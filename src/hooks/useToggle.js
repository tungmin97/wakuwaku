import { useReducer } from "react";

export const useToggle = (initialState = false) => {
  const toggle = (state) => !state;

  return useReducer(toggle, initialState);
};
