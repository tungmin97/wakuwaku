import { useState, useEffect } from "react";
import { useAnimeQuery } from "../../contexts/animeContext";
import { useStorage } from "../../contexts/userContext";
import AiringList from "../CardList/AiringList";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";

export default function Airing() {
  const { userState } = useStorage();
  const { airingAnime, getAiringAnime } = useAnimeQuery();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getAiringAnime({ status: "RELEASING", page: page });
  }, [page]);

  return (
    <>
      <main className="text-textTitle relative">
        <div className="mt-0 md:-mt-20 mx-3 md:mx-32 lg:mx-12 2xl:mx-48 mb-12 md:mb-0">
          <AiringList
            name="Popular Airing"
            dataAni={airingAnime}
            skeleton={9}
            language={userState.language}
          />
          {airingAnime && (
            <Pagination
              curPage={airingAnime.Page.pageInfo.currentPage}
              lastPage={airingAnime.Page.pageInfo.lastPage}
              paginate={setPage}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
