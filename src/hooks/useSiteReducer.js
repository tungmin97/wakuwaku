import { useEffect, useReducer } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useSiteReducer = (key, initialValue, reducer) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    let val;
    try {
      val = value || String(initialValue);
    } catch (err) {
      val = initialValue;
    }
    return val;
  });

  useEffect(() => {
    setValue(state);
  }, [state]);

  return [state, dispatch];
};

export const addToList = (item, value) => ({
  type: "ADD_TO_LIST",
  id: item,
  value: value,
});

export const removeFromList = (item) => ({
  type: "REMOVE_FROM_LIST",
  id: item,
});

export const updateItem = (item, value) => ({
  item: item,
  value: value,
});
