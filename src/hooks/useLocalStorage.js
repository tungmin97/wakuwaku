import { useState } from "react";

export const useLocalStorage = (key, initialValue = "") => {
  const [storedValue, setStoreValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log("Error found on ", err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;

      setStoreValue(newValue);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (err) {
      console.log("Error found on ", err);
    }
  };
  return [storedValue, setValue];
};
