import { FiFrown, FiHeart, FiSmile } from "react-icons/fi";

export default function CardRanking({ rankings, scores }) {
  const hasRank = rankings.find(
    (ent) => ent.season !== null && ent.type === "POPULAR"
  );

  return (
    <div className="hidden lg:block lg:w-3/12">
      <div className="flex">
        {scores && (
          <>
            {scores >= 75 && <FiSmile className="w-5 h-5 text-green-500" />}
            {scores < 75 && scores > 50 && (
              <FiSmile className="w-5 h-5 text-yellow-500" />
            )}
            {scores <= 50 && <FiFrown className="w-5 h-5 text-red-600" />}
            <div className="ml-2 text-sm text-textSecondary font-semibold">
              {scores}%
            </div>
          </>
        )}
      </div>
      <div className="flex mt-1">
        {rankings && (
          <>
            {hasRank !== undefined && (
              <FiHeart className="w-5 h-5 text-pink-600" />
            )}
            <div className="ml-2 text-sm text-textSecondary font-semibold">
              {hasRank !== undefined && "#" + hasRank.rank}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
