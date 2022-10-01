import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";
import { useStorage } from "../../contexts/userContext";

export default function CardList({
  name,
  dataAni,
  skeleton,
  search,
  language,
}) {
  const [filteredData, setFilteredData] = useState();
  const { watchState, userState } = useStorage();
  const notWatching = watchState.watching.filter(
    (ent) => ent.value === "notWatching"
  );
  const hideUnwatchAni =
    dataAni &&
    dataAni.filter((ani) => notWatching.every((ent) => ent.id !== ani.id));

  useEffect(() => {
    userState.hideWatchedAnime === "true"
      ? setFilteredData(hideUnwatchAni)
      : setFilteredData(dataAni);

    search !== "" &&
      setFilteredData(
        dataAni.filter((ani) =>
          ani.title[language].toLowerCase().includes(search.toLowerCase())
        )
      );

    search === "" &&
      setFilteredData(
        userState.hideWatchedAnime === "true" ? hideUnwatchAni : dataAni
      );
  }, [search, dataAni, watchState]);

  return (
    <div className="w-full pb-1">
      <div className="mb-14 relative z-10">
        <h2 className="flex mb-5 pl-7 text-2xl font-bold relative text-textTitle before:absolute before:h-1 before:w-5 before:bg-textTitle before:left-0 before:self-center">
          {name}
        </h2>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 ${
            filteredData && filteredData.length < 3
              ? "grid-rows-1"
              : "grid-rows-2"
          } gap-10`}
        >
          {!filteredData ? (
            [...Array(skeleton)].map((_, index) => <Loading key={index} />)
          ) : filteredData.length ? (
            filteredData.map((ani) => (
              <Card ani={ani} language={language} key={ani.id} />
            ))
          ) : (
            <div className="text-center mt-32 flex-grow text-4xl font-bold col-span-full text-zinc-400">
              No anime found with this filter
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
