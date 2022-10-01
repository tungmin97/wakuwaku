export default function CardSource({ relations, source, language }) {
  const prequel = relations.find((ent) => ent.relationType === "PREQUEL");

  return (
    <>
      {relations && (
        <div className="inline-block text-sm text-textSecondary whitespace-nowrap overflow-hidden w-11/12 text-ellipsis">
          {prequel !== undefined ? (
            `Sequel to ` +
            (prequel.node.title[language] ??
              prequel.node.title.romaji ??
              prequel.node.title.native)
          ) : (
            <span className="capitalize">
              Source • {source && source.toLowerCase().split("_").join(" ")}
            </span>
          )}
        </div>
      )}
    </>
  );
}
