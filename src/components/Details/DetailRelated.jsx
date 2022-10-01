import { useStorage } from "../../contexts/userContext";

export default function DetailRelated({ relations }) {
  const { userState } = useStorage();

  return (
    <div className="relative mb-10">
      <h2 className="text-textPrimary text-base font-semibold mb-2">
        More from this series
      </h2>
      {relations.length < 5 ? (
        <div className="text-textPrimary whitespace-nowrap md:whitespace-normal overflow-x-auto md:grid md:grid-cols-2 gap-8">
          {relations.map((ent) => (
            <div
              className="bg-backgroundSecondary inline-grid grid-flow-col md:flex rounded-sm mr-5 md:m-0"
              key={ent.node.id}
            >
              <div className="max-h-32 xl:max-h-full md:w-1/4">
                <a href={`/detail/${ent.node.id}`}>
                  <img
                    className="w-full h-full mx-auto rounded-l object-cover drop-shadow-xl hover:shadow-xl"
                    src={ent.node.coverImage.extraLarge}
                    alt="Related Image"
                  />
                </a>
              </div>
              <div className="w-auto md:w-3/4 p-3 flex flex-col">
                <div className="text-colorTheme text-sm font-semibold capitalize mb-1">
                  {ent.relationType.split("_").join(" ").toLowerCase()}
                </div>
                <a
                  className="text-base hover:text-colorTheme"
                  href={`/detail/${ent.node.id}`}
                >
                  {ent.node.title[userState.language]}
                </a>
                <div className="text-sm text-textSecondary capitalize mt-auto">
                  {`${ent.node.format.toUpperCase()} • ${ent.node.status
                    .split("_")
                    .join(" ")
                    .toLowerCase()}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-textPrimary whitespace-nowrap md:whitespace-normal overflow-auto md:overflow-hidden md:grid grid-cols-5 gap-8 gap-y-3">
          {relations.map((ent, index) => (
            <div
              className="bg-backgroundSecondary inline-block md:flex rounded mr-5 md:mr-0"
              key={ent.node.id}
            >
              <div className="h-32 md:h-full md:w-full flex relative">
                <a
                  className="w-32 md:w-full relative peer"
                  href={`/detail/${ent.node.id}`}
                >
                  <img
                    className="w-full h-full object-cover drop-shadow-xl hover:shadow-xl rounded"
                    src={ent.node.coverImage.extraLarge}
                  />
                  <div className="absolute py-1.5 w-full bottom-0 left-0 before:w-full before:h-full before:absolute before:bottom-0 before:bg-backgroundSecondary before:opacity-70">
                    <div className="relative text-center text-sm capitalize">
                      {ent.relationType.split("_").join(" ").toLowerCase()}
                    </div>
                  </div>
                </a>

                <div
                  className={`${
                    (index + 1) % 5 === 0
                      ? "md:right-full md:left-auto md:text-right"
                      : "left-full"
                  }
                  md:absolute flex flex-col h-full w-full md:w-36 lg:w-44 2xl:w-52 whitespace-normal bg-backgroundSecondary p-3 rounded md:-z-10 md:opacity-0 peer-hover:opacity-100 peer-hover:z-10 transition-opacity duration-300`}
                >
                  <div className="text-colorTheme text-sm font-semibold capitalize mb-1">
                    {ent.relationType.split("_").join(" ").toLowerCase()}
                  </div>
                  <div className="text-base hover:text-colorTheme max-w-xs">
                    {ent.node.title[userState.language]}
                  </div>
                  <div className="text-sm text-textSecondary capitalize mt-auto">
                    {`${ent.node.format.toUpperCase()} • ${ent.node.status
                      .split("_")
                      .join(" ")
                      .toLowerCase()}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
