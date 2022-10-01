import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export const formatAiringDate = (schedule, date) => {
  if (schedule) {
    if (dayjs.unix(schedule.airingAt).diff(dayjs(), "day") > 30) {
      return (
        dayjs().date(date.day).format("DD") +
        " " +
        dayjs()
          .month(date.month - 1)
          .format("MMMM") +
        ", " +
        date.year
      );
    } else {
      return dayjs
        .duration(dayjs.unix(schedule.airingAt).diff(dayjs()))
        .format("D [days]/H [hours]/m [mins]")
        .replace(/\b0+\s\b[a-z/]+\s*/gi, "")
        .split("/")
        .slice(0, 2)
        .join(", ");
    }
  } else {
    let dateArr = [];
    if (date.day) {
      dateArr.push(dayjs().date(date.day).format("DD"));
    }
    if (date.month) {
      dateArr.push(
        dayjs()
          .month(date.month - 1)
          .format("MMMM") + ","
      );
    }
    if (date.year) {
      dateArr.push(date.year);
    }
    return dateArr.join(" ");
  }
};
