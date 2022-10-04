import { useExpand } from "../../hooks/useExpand";

export default function DetailCharacter({ characters }) {
  const { filtered, isExpanded, handleClick } = useExpand(
    characters.slice(0, 6)
  );

  return (
    <div className="mb-10">
      <h2 className="text-textPrimary text-base font-semibold mb-2">
        Characters
      </h2>
      <div className="text-textPrimary grid md:grid-cols-2 gap-8 gap-y-3 md:gap-y-5 mb-3">
        {filtered.map(({ node: { id, image, media, name }, voiceActors }) => (
          <div className="bg-backgroundSecondary flex rounded" key={id}>
            <div
              className={`flex ${
                voiceActors.length !== 0 ? "w-1/2" : "w-full"
              }`}
            >
              <img
                className={`${
                  voiceActors.length !== 0 ? "w-1/3" : "w-1/6"
                } h-full object-cover rounded-l`}
                src={image.large}
                alt="Character"
                loading="lazy"
              ></img>
              <div className="text-sm p-2.5 flex flex-col justify-between w-2/3">
                <div>{name.full}</div>
                <div className="text-textSecondary text-sm capitalize">
                  {media.edges[0].characterRole.toLowerCase()}
                </div>
              </div>
            </div>
            {voiceActors.length !== 0 && (
              <div className="flex flex-row-reverse w-1/2">
                <img
                  className="w-1/3 h-full object-cover rounded-r"
                  src={voiceActors[0].image.large}
                  alt="Voice Actor"
                  loading="lazy"
                ></img>
                <div className="text-sm p-2.5 text-right flex flex-col justify-between w-2/3">
                  <div>{voiceActors[0].name.full}</div>
                  <div className="text-textSecondary">
                    {voiceActors[0].languageV2}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {characters.length > 6 && (
        <div className="flex justify-center">
          {!isExpanded ? (
            <button
              className="text-textPrimary hover:text-colorTheme"
              onClick={() => handleClick(characters)}
            >
              See More
            </button>
          ) : (
            <button
              className="text-textPrimary hover:text-colorTheme"
              onClick={() => handleClick(characters.slice(0, 6))}
            >
              See Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}
