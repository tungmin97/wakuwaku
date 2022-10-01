import { useReducer } from "react";

export const useSearch = (initialValue = "") => {
  return useReducer((_value, e) => e.target.value, initialValue);
};
