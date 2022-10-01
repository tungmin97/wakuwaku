import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export default function DetailAiring({ schedule }) {
  return (
    <div className="mb-2 text-colorTheme">
      <h2 className="font-semibold">Airing</h2>
      <div className="text-sm">
        Ep {schedule[0].episode}:{" "}
        {dayjs
          .duration(dayjs.unix(schedule[0].airingAt).diff(dayjs()))
          .format("D[d] H[h] m[m]")
          .replace(/\b0[a-z/]+\s*/gi, "")}
      </div>
    </div>
  );
}
