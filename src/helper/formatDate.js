import dayjs from "dayjs";

export const formatDate = (date) => {
  let dateArr = [];
  date.day && dateArr.push(dayjs().date(date.day).format("DD"));
  date.month && dateArr.push(dayjs().date(date.month).format("MMMM") + ",");
  date.year && dateArr.push(date.year);
  return dateArr.join(" ");
};
