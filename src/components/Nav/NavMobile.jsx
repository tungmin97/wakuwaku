import {
  FiArchive,
  FiCalendar,
  FiLoader,
  FiMenu,
  FiSettings,
} from "react-icons/fi";
import { FaCloud, FaLeaf, FaSnowflake, FaSun } from "react-icons/fa";
import { useToggle } from "../../hooks/useToggle";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

export default function NavMobile({ season, curSeason, curYear }) {
  const [isMenu, toggle] = useToggle(false);
  const { WINTER, SPRING, SUMMER, FALL } = season;
  const { seasonUrl } = useParams();
  const seasonMatch = seasonUrl && seasonUrl.split("-")[0];
  const location = useLocation();
  const locationMatch = location.pathname.slice(1);
  const defaultUrl = `${curSeason.toLowerCase()}-${curYear}`;

  return (
    <>
      <Link
        to={defaultUrl}
        className="flex w-full mx-auto py-3 justify-center text-3xl font-bold text-zinc-300"
        href="/"
        aria-label="AniTrack"
      >
        wakuwaku
      </Link>
      <nav className="flex p-4 h-18 w-full justify-evenly rounded-md content-center fixed bottom-0 left-0 bg-gray-900 text-gray-200 z-20">
        <div className="flex items-center w-5/6">
          {!isMenu ? (
            <div className="flex w-full mx-auto gap-2">
              <Link
                to={`/winter-${WINTER}`}
                className={`text-center w-36 ${
                  seasonMatch && seasonMatch === "winter"
                    ? "text-zinc-300"
                    : "text-zinc-400"
                }`}
              >
                <FaSnowflake className="mx-auto w-5 h5" />
                <div className="text-sm font-semibold mt-0.5">Winter</div>
              </Link>
              <Link
                to={`/spring-${SPRING}`}
                className={`text-center w-36 ${
                  seasonMatch && seasonMatch === "spring"
                    ? "text-zinc-300"
                    : "text-zinc-400"
                }`}
              >
                <FaCloud className="mx-auto w-5 h5" />
                <div className="text-sm font-semibold mt-0.5">Spring</div>
              </Link>
              <Link
                to={`/summer-${SUMMER}`}
                className={`text-center w-36 ${
                  seasonMatch && seasonMatch === "summer"
                    ? "text-zinc-200"
                    : "text-zinc-400"
                }`}
              >
                <FaSun className="mx-auto w-5 h5" />
                <div className="text-sm font-semibold mt-0.5">Summer</div>
              </Link>
              <Link
                to={`/fall-${FALL}`}
                className={`text-center w-36 ${
                  seasonMatch && seasonMatch === "fall"
                    ? "text-zinc-300"
                    : "text-zinc-400"
                }`}
              >
                <FaLeaf className="mx-auto w-5 h5" />
                <div className="text-sm font-semibold mt-0.5">Fall</div>
              </Link>
            </div>
          ) : (
            <div className="flex w-full mx-auto gap-2">
              <Link to="airing" className="text-center w-36">
                <FiCalendar className="mx-auto w-5 h-5" />
                <div className="pt-1 text-sm opacity-90 text-zinc-400">
                  Airing
                </div>
              </Link>
              <Link to="archive" className="text-center w-36">
                <FiArchive className="mx-auto w-5 h-5" />
                <div className="pt-1 text-sm opacity-90 text-zinc-400">
                  Archive
                </div>
              </Link>
              <Link to="tba" className="text-center w-36">
                <FiLoader className="mx-auto w-5 h-5" />
                <div className="pt-1 text-sm opacity-90 text-zinc-400">TBA</div>
              </Link>
              <Link to="settings" className="text-center w-36">
                <FiSettings className="mx-auto w-5 h-5" />
                <div className="pt-1 text-sm opacity-90 text-zinc-400">
                  Settings
                </div>
              </Link>
            </div>
          )}
        </div>
        <div
          className="flex w-1/6 items-center justify-center"
          onClick={toggle}
        >
          <FiMenu className="w-10 h-10 text-slate-400" />
        </div>
      </nav>
      {locationMatch === "" && <Navigate to={defaultUrl} replace="true" />}
      <Outlet />
    </>
  );
}
