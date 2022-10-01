import { formatDate } from "../../helper/formatDate";
import parse from "html-react-parser";
import DetailAiring from "./DetailAiring";

export default function DetailPannel({ ani }) {
  return (
    <div className="flex flex-row md:flex-col gap-6 md:gap-1 whitespace-nowrap md:whitespace-normal overflow-x-auto bg-backgroundSecondary rounded-sm text-textPrimary p-3">
      {ani.airingSchedule.nodes.length !== 0 && (
        <DetailAiring schedule={ani.airingSchedule.nodes} />
      )}
      <div className="mb-2">
        <div className="font-semibold">Format</div>
        <div className="text-sm text-textSecondary">{ani.format}</div>
      </div>
      {ani.episodes && (
        <div className="mb-2">
          <div className="font-semibold">Episodes</div>
          <div className="text-sm text-textSecondary">{ani.episodes}</div>
        </div>
      )}
      <div className="mb-2">
        <div className="font-semibold">Status</div>
        <div className="text-sm text-textSecondary capitalize">
          {ani.status.split("_").join(" ").toLowerCase()}
        </div>
      </div>
      {formatDate(ani.startDate) && (
        <div className="mb-2">
          <div className="font-semibold">Start Date</div>
          <div className="text-sm text-textSecondary">
            {formatDate(ani.startDate)}
          </div>
        </div>
      )}
      {formatDate(ani.endDate) && (
        <div className="mb-2">
          <div className="font-semibold">End Date</div>
          <div className="text-sm text-textSecondary">
            {formatDate(ani.endDate)}
          </div>
        </div>
      )}
      {ani.season && (
        <div className="mb-2">
          <div className="font-semibold">Season</div>
          <div className="text-sm text-textSecondary capitalize">
            {ani.season.toLowerCase()} {ani.seasonYear}
          </div>
        </div>
      )}
      {ani.averageScore && (
        <div className="mb-2">
          <div className="font-semibold">Average Score</div>
          <div className="text-sm text-textSecondary capitalize">
            {ani.averageScore}%
          </div>
        </div>
      )}
      <div className="mb-2">
        <div className="font-semibold">Popularity</div>
        <div className="text-sm text-textSecondary">{ani.popularity}</div>
      </div>
      <div className="mb-2">
        <div className="font-semibold">Favorites</div>
        <div className="text-sm text-textSecondary">{ani.favourites}</div>
      </div>
      <div className="mb-2">
        <div className="font-semibold">Studios</div>
        <div className="text-sm text-textSecondary">
          {ani.studios.nodes.map((ent, index) => (
            <span key={index}>
              {ent.name}
              {""}
              {index !== ani.studios.nodes.length - 1 && <br />}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-2">
        <div className="font-semibold">Source</div>
        <div className="text-sm text-textSecondary capitalize">
          {ani.source.split("_").join(" ").toLowerCase()}
        </div>
      </div>
      {ani.hashtag && (
        <div className="mb-2">
          <div className="font-semibold">Hashtag</div>
          <div className="text-sm text-textSecondary">
            {parse(ani.hashtag.split(" ").join("<br />"))}
          </div>
        </div>
      )}
      <div className="mb-2">
        <div className="font-semibold">Genres</div>
        <div className="text-sm text-textSecondary">
          {ani.genres.map((ent, index) => (
            <span key={index}>
              {ent}
              <br />
            </span>
          ))}
        </div>
      </div>
      {ani.title.romaji && (
        <div className="mb-2">
          <div className="font-semibold">Romaji</div>
          <div className="text-sm text-textSecondary">{ani.title.romaji}</div>
        </div>
      )}
      {ani.title.english && (
        <div className="mb-2">
          <div className="font-semibold">English</div>
          <div className="text-sm text-textSecondary">{ani.title.english}</div>
        </div>
      )}
      {ani.title.native && (
        <div className="mb-2">
          <div className="font-semibold">Japanese</div>
          <div className="text-sm text-textSecondary">{ani.title.native}</div>
        </div>
      )}
      <div className="mb-2">
        <div className="font-semibold">Synonyms</div>
        <div className="text-sm text-textSecondary">
          {ani.synonyms.map((ent, index) => (
            <span key={index}>
              {ent}
              <br />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
