import { useEffect, useContext, createContext } from "react";
import { useSiteReducer } from "../hooks/useSiteReducer";
import { settingReducer } from "../reducers/settingReducer";
import { watchReducer } from "../reducers/watchReducer";

const userContext = createContext();

export const useStorage = () => {
  return useContext(userContext);
};

export const UserProvider = ({ children }) => {
  const watchList = { watching: [] };
  const userSettings = {
    theme: "theme-dark",
    language: "romaji",
    hideWatchedAnime: "false",
    sorting: "POPULARITY_DESC",
  };

  const [watchState, watchDispatch] = useSiteReducer(
    "watchList",
    watchList,
    watchReducer
  );

  const [userState, userDispatch] = useSiteReducer(
    "settings",
    userSettings,
    settingReducer
  );

  useEffect(() => {
    document.documentElement.classList.add(userState.theme);
  }, []);

  const setLocalTheme = (key) => {
    document.documentElement.classList.replace(userState.theme, key);
  };

  const userData = {
    setLocalTheme,
    watchState,
    watchDispatch,
    userState,
    userDispatch,
  };

  return (
    <userContext.Provider value={userData}>{children}</userContext.Provider>
  );
};
