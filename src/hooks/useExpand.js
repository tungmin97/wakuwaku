import { useState } from "react";
import { useToggle } from "./useToggle";

export const useExpand = (initialValue) => {
  const [filtered, setFiltered] = useState(initialValue);
  const [isExpanded, toggle] = useToggle(false);

  function handleClick(option) {
    setFiltered(option);
    toggle();
  }

  const value = { filtered, isExpanded, handleClick };
  return value;
};
