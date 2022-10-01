import { Route, Routes } from "react-router-dom";
import Airing from "./components/Main/Airing";
import AnimeDetail from "./components/Main/AnimeDetail";
import Archive from "./components/Main/Archive";
import MainContent from "./components/Main/MainContent";
import Settings from "./components/Main/Settings";
import TBA from "./components/Main/TBA";
import Nav from "./components/Nav/Nav";
import NavMobile from "./components/Nav/NavMobile";
import Error from "./components/404/Error";
import { AnimeProvider } from "./contexts/animeContext";
import { UserProvider } from "./contexts/userContext";
import { getSeason } from "./helper/getSeason";
import { useWindowSize } from "./hooks/useWindowSize";

export default function App() {
  const { season, curSeason, curYear } = getSeason();
  const windowSize = useWindowSize();
  const isMobile = windowSize <= 768;

  return (
    <UserProvider>
      <AnimeProvider>
        <div className="font-sans w-screen h-screen max-h-max bg-backgroundSecondary overflow-x-hidden">
          <Routes>
            <Route
              path="/"
              element={
                !isMobile ? (
                  <Nav
                    season={season}
                    curSeason={curSeason}
                    curYear={curYear}
                  />
                ) : (
                  <NavMobile
                    season={season}
                    curSeason={curSeason}
                    curYear={curYear}
                  />
                )
              }
            >
              <Route
                path="/:seasonUrl"
                element={<MainContent isMobile={isMobile} />}
              />
              <Route path="/detail/:id" element={<AnimeDetail />} />
              <Route path="/airing" element={<Airing />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/tba" element={<TBA />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/404" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </AnimeProvider>
    </UserProvider>
  );
}
