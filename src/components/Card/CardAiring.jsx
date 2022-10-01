import { formatAiringDate } from "../../helper/formatAiringDate";
import { formatAiringInfo } from "../../helper/formatAiringInfo";

export default function CardAiring({ schedule, status, episodes, startDate }) {
  return (
    <>
      <div className="text-xs text-textPrimary font-semibold">
        {formatAiringInfo(schedule, status, episodes)}
      </div>
      <div className="text-lg text-textHeader font-semibold">
        {formatAiringDate(schedule, startDate)}
      </div>
    </>
  );
}
