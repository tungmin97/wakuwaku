import CardList from "../CardList/CardList";
import { useAnimeQuery } from "../../contexts/animeContext";
import { useDeferredValue, useEffect } from "react";
import { useSearch } from "../../hooks/useSearch";
import { useStorage } from "../../contexts/userContext";
import NavSearch from "../Nav/NavSearch";
import { useParams } from "react-router-dom";
import { memo } from "react";

function MainContent({ isMobile }) {
  const { seasonUrl } = useParams();
  const { userState } = useStorage();
  const [search, handleFilter] = useSearch("");
  const [sortTerm, handleSort] = useSearch(userState.sorting);
  const deferredSearch = useDeferredValue(search);
  const { dataAni, dataAniShort, dataAniMovie, dataMore, dataRest, getAnime } =
    useAnimeQuery();
  const url = ["winter", "spring", "summer", "fall"];
  const regexp = new RegExp(url.join("|"));
  const validUrl = seasonUrl && regexp.test(seasonUrl);

  useEffect(() => {
    validUrl && getAnime(seasonUrl.toUpperCase(), sortTerm);
  }, [sortTerm, seasonUrl]);

  return (
    <main className="text-textTitle relative">
      <div className="mt-0 md:-mt-32 lg:-mt-32 mx-3 md:mx-32 lg:mx-12 2xl:mx-48 mb-10">
        <NavSearch
          filter={handleFilter}
          sort={handleSort}
          language={userState.language}
          isMobile={isMobile}
        />
        <CardList
          name="TV"
          dataAni={dataAni}
          skeleton={9}
          key="TV"
          search={deferredSearch}
          language={userState.language}
        />
        <CardList
          name="MOVIE"
          dataAni={dataAniMovie}
          skeleton={1}
          key="MOVIE"
          search={deferredSearch}
          language={userState.language}
        />
        <CardList
          name="TV SHORT"
          dataAni={dataAniShort}
          skeleton={1}
          key="TV SHORT"
          search={deferredSearch}
          language={userState.language}
        />
        <CardList
          name="OVA / ONA / SPECIAL"
          dataAni={dataRest}
          skeletonCard={1}
          search={deferredSearch}
          language={userState.language}
        />
        <CardList
          name="LEFTOVERS"
          dataAni={dataMore}
          skeleton={1}
          key="LEFTOVERS"
          search={deferredSearch}
          language={userState.language}
        />
      </div>
    </main>
  );
}

export default memo(MainContent);
