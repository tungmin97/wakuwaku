import { FiArchive, FiCalendar, FiLoader, FiSettings } from "react-icons/fi";
import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

export default function Nav({ season, curSeason, curYear }) {
  const { WINTER, SPRING, SUMMER, FALL } = season;
  const { seasonUrl } = useParams();
  const seasonMatch = seasonUrl && seasonUrl.split("-")[0];
  const location = useLocation();
  const locationMatch = location.pathname.slice(1);
  const defaultUrl = `${curSeason.toLowerCase()}-${curYear}`;

  return (
    <>
      <nav className="w-full h-60 pt-10 bg-gray-900 text-gray-200">
        <div className="grid mx-10 2xl:mx-48 relative items-center grid-cols-2 md:grid-cols-3">
          <Link
            to={defaultUrl}
            className="flex w-full mx-auto justify-center text-3xl lg:text-5xl font-bold text-zinc-300 hover:text-zinc-200"
            aria-label="AniTrack"
          >
            wakuwaku
          </Link>
          <div className="flex mx-auto gap-2">
            <Link
              to={`winter-${WINTER}`}
              className={`text-center w-16 2xl:w-24 ${
                seasonMatch && seasonMatch === "winter"
                  ? "text-zinc-300"
                  : "text-zinc-400"
              }`}
            >
              <div className="text-lg font-semibold">Winter</div>
              <div className="text-xs font-normal text-zinc-400">{WINTER}</div>
            </Link>
            <Link
              to={`/spring-${SPRING}`}
              className={`text-center w-16 2xl:w-24 ${
                seasonMatch && seasonMatch === "spring"
                  ? "text-zinc-300"
                  : "text-zinc-400"
              }`}
            >
              <div className="text-lg font-semibold">Spring</div>
              <div className="text-xs font-normal text-zinc-400">{SPRING}</div>
            </Link>
            <Link
              to={`/summer-${SUMMER}`}
              className={`text-center w-16 2xl:w-24 ${
                seasonMatch && seasonMatch === "summer"
                  ? "text-zinc-200"
                  : "text-zinc-400"
              }`}
            >
              <div className="text-lg font-semibold">Summer</div>
              <div className="text-xs font-normal text-zinc-400">{SUMMER}</div>
            </Link>
            <Link
              to={`/fall-${FALL}`}
              className={`text-center w-16 2xl:w-24 ${
                seasonMatch && seasonMatch === "fall"
                  ? "text-zinc-300"
                  : "text-zinc-400"
              }`}
            >
              <div className="text-lg font-semibold">Fall</div>
              <div className="text-xs font-normal text-zinc-400">{FALL}</div>
            </Link>
          </div>
          <div className="hidden md:flex justify-center w-4/5 gap-3 text-center self-center">
            <Link to="airing" className="w-1/6">
              <FiCalendar className="mx-auto w-5 h-5" />
              <div
                className={`pt-1 text-sm opacity-90 ${
                  locationMatch === "airing" ? "text-zinc-300" : "text-zinc-400"
                }`}
              >
                Airing
              </div>
            </Link>
            <Link to="archive" className="w-1/6">
              <FiArchive className="mx-auto w-5 h-5" />
              <div
                className={`pt-1 text-sm opacity-90 ${
                  locationMatch === "archive"
                    ? "text-zinc-300"
                    : "text-zinc-400"
                }`}
              >
                Archive
              </div>
            </Link>
            <Link to="tba" className="w-1/6">
              <FiLoader className="mx-auto w-5 h-5" />
              <div
                className={`pt-1 text-sm opacity-90 ${
                  locationMatch === "tba" ? "text-zinc-300" : "text-zinc-400"
                }`}
              >
                TBA
              </div>
            </Link>
            <Link to="settings" className="w-1/6">
              <FiSettings className="mx-auto w-5 h-5" />
              <div
                className={`pt-1 text-sm opacity-90 ${
                  locationMatch === "settings"
                    ? "text-zinc-300"
                    : "text-zinc-400"
                }`}
              >
                Settings
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {locationMatch === "" && <Navigate to={defaultUrl} replace="true" />}
      <Outlet />
    </>
  );
}
