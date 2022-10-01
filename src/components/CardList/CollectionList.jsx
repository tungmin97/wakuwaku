import Card from "../Card/Card";
import Loading from "../Loading/Loading";

export default function CollectionList({ name, dataAni, skeleton, language }) {
  return (
    <div className="w-full pb-1 md:p-0">
      <div className="mb-14 relative z-10">
        <h2 className="flex mb-5 pl-7 text-2xl font-bold relative text-textTitle before:absolute before:h-1 before:w-5 before:bg-textTitle before:left-0 before:self-center">
          {name}
        </h2>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 ${
            dataAni && dataAni.length < 3 ? "grid-rows-1" : "grid-rows-2"
          } gap-10`}
        >
          {!dataAni ? (
            [...Array(skeleton)].map((_, index) => <Loading key={index} />)
          ) : dataAni.length ? (
            dataAni.map((ani) => (
              <Card ani={ani} language={language} key={ani.id} />
            ))
          ) : (
            <div className="text-center mt-32 flex-grow text-4xl font-bold col-span-full text-zinc-400">
              No anime on this list!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
