import { useStorage } from "../../contexts/userContext";

// export default function DetailRecommend({ recommendations }) {
export default function DetailRecommend({ recommendations }) {
  const { userState } = useStorage();

  return (
    <div className="mb-10">
      <h2 className="text-textPrimary text-base font-semibold mb-3">
        Recommendations
      </h2>
      <div className="text-textPrimary grid grid-flow-col overflow-auto md:flex gap-8 gap-y-5 mb-7">
        {recommendations
          .slice(0, 5)
          .map(({ mediaRecommendation: { coverImage, id, title } }) => (
            <div className="flex flex-col w-32 group" key={id}>
              <a className="" href={`/detail/${id}`}>
                {coverImage.large ? (
                  <img
                    className="w-full aspect-[9/14] object-top object-cover rounded group-hover:shadow-xl group-hover:shadow-backgroundSecondary"
                    src={coverImage.large}
                    alt="Recommendation"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="w-full aspect-[9/14] rounded group-hover:shadow-xl group-hover:shadow-backgroundSecondary genre"
                    style={{
                      "--genre-color": coverImage.color
                        ? coverImage.color
                        : "#69C3F0",
                    }}
                  ></div>
                )}
              </a>
              <a
                href={`/detail/${id}`}
                className="text-textPrimary hover:text-colorTheme text-base font-semibold mt-2"
              >
                {title[userState.language]}
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
