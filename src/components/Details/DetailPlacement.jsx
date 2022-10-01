import { AiFillHeart, AiFillStar } from "react-icons/ai";

export default function DetailPlacement({ rankings }) {
  const rankRated = rankings.find(
    (rank) => rank.allTime === true && rank.type === "RATED"
  );
  const rankPopular = rankings.find(
    (rank) => rank.allTime === true && rank.type === "POPULAR"
  );
  return (
    <>
      {rankRated && (
        <div className="flex text-textPrimary text-sm font-semibold p-3 bg-backgroundSecondary mb-5 rounded">
          <AiFillStar className="w-4 h-4 fill-yellow-400" />
          <span className="ml-2">#{rankRated.rank} Highest Rated All Time</span>
        </div>
      )}
      {rankPopular && (
        <div className="flex text-textPrimary text-sm font-semibold p-3 bg-backgroundSecondary mb-5 rounded">
          <AiFillHeart className="w-4 h-4 fill-red-400" />
          <span className="ml-2">
            #{rankPopular.rank} Most Popular All Time
          </span>
        </div>
      )}
    </>
  );
}
