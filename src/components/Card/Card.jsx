import CardSource from "./CardSource";
import CardRanking from "./CardRanking";
import parse from "html-react-parser";
import CardHeader from "./CardHeader";
import CardAiring from "./CardAiring";
import CardGenre from "./CardGenre";
import CardWatching from "./CardWatching";
import CardMisc from "./CardMisc";

export default function Card({ ani, language }) {
  return (
    <div className="flex flex-row h-64 min-w-sm text-left rounded bg-backgroundPrimary shadow-md overflow-hidden transition-shadow relative group">
      <CardHeader
        id={ani.id}
        coverImg={ani.coverImage.extraLarge}
        title={ani.title[language] ?? ani.title.romaji ?? ani.title.native}
        studios={ani.studios.nodes}
        color={ani.coverImage.color}
      />
      <div className="w-7/12 lg:w-[64%] flex flex-col flex-grow">
        <div className="min-h-0 w-full relative p-4 scrollbar-thumb-backgroundSecondary scrollbar-thumb-rounded-md scrollbar-thin overflow-x-hidden overflow-y-scroll flex-grow">
          <div className="flex flex-col min-h-0 h-2/5 relative">
            <div className="flex w-full h-3/5 opacity-100 transition-all duration-500 ease-in-out delay-75 transform group-hover:-translate-x-full group-hover:opacity-0">
              <div className="w-full lg:w-9/12">
                <CardAiring
                  schedule={ani.airingSchedule.nodes[0]}
                  status={ani.status}
                  episodes={ani.episodes}
                  startDate={ani.startDate}
                />
                <CardSource
                  relations={ani.relations.edges}
                  source={ani.source}
                  language={language}
                />
              </div>
              <CardRanking rankings={ani.rankings} scores={ani.averageScore} />
            </div>
            <CardMisc
              hashtag={ani.hashtag}
              links={ani.externalLinks}
              trailer={ani.trailer}
            />
          </div>
          <div className="mt-2 text-xs line-clamp-6 overflow-ellipsis tracking-wide text-textSecondary hover:line-clamp-none hover:text-textPrimary">
            <p className="">{ani.description && parse(ani.description)}</p>
          </div>
        </div>
        <div className="flex w-full items-center p-3">
          <CardGenre genres={ani.genres} color={ani.coverImage.color} />
          <CardWatching id={ani.id} />
        </div>
      </div>
    </div>
  );
}
