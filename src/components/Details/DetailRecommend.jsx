import { useStorage } from "../../contexts/userContext";

export default function DetailRecommend({ recommendations }) {
  const { userState } = useStorage();

  return (
    <div className="mb-10">
      <h2 className="text-textPrimary text-base font-semibold mb-3">
        Recommendations
      </h2>
      <div className="text-textPrimary grid grid-flow-col overflow-auto md:flex gap-8 gap-y-5 mb-7">
        {recommendations.slice(0, 5).map((ent) => (
          <div
            className="flex flex-col w-32 group"
            key={ent.mediaRecommendation.id}
          >
            <a className="" href={`/detail/${ent.mediaRecommendation.id}`}>
              <img
                className="w-full aspect-[9/14] object-top object-cover rounded group-hover:shadow-xl group-hover:shadow-backgroundSecondary"
                src={ent.mediaRecommendation.coverImage.extraLarge}
              />
            </a>
            <a
              href={`/detail/${ent.mediaRecommendation.id}`}
              className="text-textPrimary hover:text-colorTheme text-base font-semibold mt-2"
            >
              {ent.mediaRecommendation.title[userState.language]}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
