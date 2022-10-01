import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export const formatAiringInfo = (schedule, status, episodes) => {
  if (schedule) {
    if (dayjs.unix(schedule.airingAt).diff(dayjs(), "day") > 30) {
      if (episodes >= 1)
        return `Ep ${schedule.episode} of ${episodes} airing on`;
      if (status === "NOT_YET_RELEASED") return "Airing on";
      return `Ep ${schedule.episode} airing on`;
    }
    return `Ep ${schedule.episode} ${
      episodes ? `of ${episodes}` : ""
    } airing in`;
  }
  if (episodes && status === "FINISHED") {
    return episodes === 1
      ? `1 Episode aired on`
      : `${episodes} Episodes aired on`;
  }
  if (!episodes && status === "FINISHED") return "Aired on";
  if (!episodes && status === "RELEASING") return "Airing on";
  return "Airing in";
};
