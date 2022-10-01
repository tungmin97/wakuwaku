import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useLocalStorage(
    "innerWidth",
    window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => setWindowSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
};
