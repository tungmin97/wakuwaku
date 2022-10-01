import { useState } from "react";
import { createContext, useContext } from "react";
import { airingQuery } from "../graphql/airingQuery";
import { animeDetailQuery } from "../graphql/animeDetailQuery";
import { animeQuery } from "../graphql/animeQuery";
import { fetcher } from "../helper/fetcher";
import { getPrevSeason } from "../helper/getSeason";

const AnimeContext = createContext();

export const useAnimeQuery = () => {
  return useContext(AnimeContext);
};

export const AnimeProvider = ({ children }) => {
  const [dataAni, setDataAni] = useState();
  const [dataAniShort, setDataAniShort] = useState();
  const [dataAniMovie, setAniMovie] = useState();
  const [dataMore, setDataMore] = useState();
  const [dataRest, setDataRest] = useState();
  const [detailAni, setDetailAni] = useState();
  const [errorDetail, setErrorDetail] = useState();
  const [airingAnime, setAiringAnime] = useState();

  const getAnime = async (season, sorting) => {
    setDataAni();
    setDataAniShort();
    setAniMovie();
    setDataMore();
    setDataRest();

    const [curSeason, curYear] = season.split("-");
    const { prevSeason, prevYear } = getPrevSeason(curSeason, curYear);

    const variables = {
      season: curSeason,
      year: curYear,
      previousSeason: prevSeason,
      previousYear: prevYear,
      page: 1,
      sort: sorting,
    };

    const anime = await fetcher(animeQuery, variables);

    setDataAni(anime.tv?.media);
    setDataAniShort(
      anime.rest?.media.filter((ent) => ent.format === "TV_SHORT")
    );
    setAniMovie(anime.rest?.media.filter((ent) => ent.format === "MOVIE"));
    setDataMore(anime.leftovers?.media.filter((ent) => ent.format === "TV"));
    setDataRest(
      anime.rest?.media.filter(
        (ent) => ent.format !== "TV_SHORT" && ent.format !== "MOVIE"
      )
    );
  };

  const getAnimeDetail = async (id) => {
    setDetailAni();
    setErrorDetail();

    const animeDetail = await fetcher(animeDetailQuery, id);

    animeDetail.error && setErrorDetail(animeDetail.error);
    setDetailAni(animeDetail.Media);
  };

  const getAiringAnime = async (status) => {
    setAiringAnime();
    const airingAnime = await fetcher(airingQuery, status);
    setAiringAnime(airingAnime);
  };

  const animeData = {
    dataAni,
    dataAniShort,
    dataAniMovie,
    dataMore,
    dataRest,
    getAnime,
    detailAni,
    getAnimeDetail,
    errorDetail,
    airingAnime,
    getAiringAnime,
  };

  return (
    <AnimeContext.Provider value={animeData}>{children}</AnimeContext.Provider>
  );
};
