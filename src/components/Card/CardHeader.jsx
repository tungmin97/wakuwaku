import { Link } from "react-router-dom";

export default function CardHeader({ coverImg, title, studios, id, color }) {
  return (
    <Link
      to={`/detail/${id}`}
      className=" w-5/12 lg:w-[36%] flex flex-col justify-end relative no-underline transition-colors outline-0 infoHover"
      style={{ "--hover-color": color ? color : "#69C3F0" }}
    >
      <img
        className="absolute w-full h-full object-cover object-center"
        src={coverImg}
        alt={title}
      />
      <div
        className="bg-slate-700 opacity-90 p-3 pb-2 w-full text-base font-semibold absolute leading-tight before:absolute before:w-full before:h-full  before:opacity-10 before:top-0 before:left-0 poster"
        style={{ "--poster-color": color ? color : "#64748b" }}
      >
        <div className="leading-tight text-sm">{title}</div>

        {studios.map((ent, index) => (
          <div
            key={index}
            className="my-1 text-xs font-bold info"
            style={{
              "--info-color": color ? color : "#69C3F0",
            }}
          >
            {ent.name}
            {""}
            {index !== studios.length - 1 && ", "}
          </div>
        ))}
      </div>
    </Link>
  );
}
