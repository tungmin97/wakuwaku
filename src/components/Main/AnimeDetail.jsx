import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useAnimeQuery } from "../../contexts/animeContext";
import { useStorage } from "../../contexts/userContext";
import parse from "html-react-parser";
import DetailPlacement from "../Details/DetailPlacement";
import DetailPannel from "../Details/DetailPannel";
import DetailRelated from "../Details/DetailRelated";
import DetailCharacter from "../Details/DetailCharacter";
import Footer from "../Footer/Footer";
import DetailStaff from "../Details/DetailStaff";
import DetailTrailer from "../Details/DetailTrailer";
import DetailRecommend from "../Details/DetailRecommend";
import LoadingDetail from "../Loading/LoadingDetail";

export default function AnimeDetail() {
  const { getAnimeDetail, detailAni, errorDetail } = useAnimeQuery();
  const id = useParams();
  const { userState } = useStorage();

  useEffect(() => {
    id && getAnimeDetail(id);
  }, [id]);

  return (
    <>
      {errorDetail === 404 && <Navigate to="/404" replace="true" />}
      {!detailAni ? (
        <LoadingDetail />
      ) : (
        <div className="w-full max-h-max bg-backgroundPrimary -mt-28">
          {detailAni.bannerImage && (
            <div className="after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-gradient-to-t after:from-backgroundPrimary md:after:from-backgroundSecondary relative">
              <img
                className="w-full h-72 md:h-96 object-cover object-top z-10"
                src={detailAni.bannerImage}
                alt="Banner Image"
              />
            </div>
          )}
          <div className="py-3 md:bg-backgroundSecondary">
            <div className="lg:max-w-screen-xl mx-auto px-3 md:px-12 flex flex-col md:flex-row">
              <div
                className={`w-2/5 mx-auto md:w-1/4 ${
                  detailAni.bannerImage && "-mt-10"
                }`}
              >
                {detailAni.coverImage.large ? (
                  <img
                    className="w-full h-full rounded-md object-cover drop-shadow-2xl mb-3 md:mb-0"
                    src={detailAni.coverImage.large}
                    alt="Cover Image"
                  />
                ) : (
                  <div
                    className="w-full h-full rounded-md drop-shadow-2xl mb-3 md:mb-0 genre"
                    style={{
                      "--genre-color": detailAni.coverImage.color
                        ? detailAni.coverImage.color
                        : "#69C3F0",
                    }}
                  ></div>
                )}
              </div>
              <div className="md:w-3/4 bg-backgroundSecondary p-3 pt-5 md:pl-7 pb-2">
                <h1 className="text-2xl 2xl:text-3xl font-semibold text-textPrimary">
                  {detailAni.title[userState.language]}
                </h1>
                <p className="text-base text-textPrimary tracking-tight mt-3">
                  {detailAni.description && parse(detailAni.description)}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 px-3 md:px-12 lg:max-w-screen-xl lg:mx-auto relative  flex flex-col md:flex-row gap-10">
            <div className="md:w-[23%]">
              <DetailPlacement rankings={detailAni.rankings} />
              <DetailPannel ani={detailAni} />
            </div>
            <div className="md:w-[77%]">
              <DetailRelated relations={detailAni.relations.edges} />
              <DetailCharacter characters={detailAni.characters.edges} />
              <DetailStaff staff={detailAni.staff.edges} />
              {detailAni.trailer && (
                <DetailTrailer trailer={detailAni.trailer} />
              )}
              {detailAni.recommendations.nodes.length !== 0 && (
                <DetailRecommend
                  recommendations={detailAni.recommendations.nodes}
                />
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
