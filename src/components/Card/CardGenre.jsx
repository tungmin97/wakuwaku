export default function CardGenre({ genres, color }) {
  return (
    <div className="flex flex-wrap items-center h-5 overflow-hidden">
      {genres.map((ent, index) => {
        return (
          <div
            className="text-slate-700 rounded-lg text-sm font-bold h-5 mr-3 px-3 lowercase genre"
            style={{
              "--genre-color": color ? color : "#69C3F0",
            }}
            key={index}
          >
            {ent}
          </div>
        );
      })}
    </div>
  );
}
