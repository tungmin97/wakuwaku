import { BsCheck, BsQuestion, BsX } from "react-icons/bs";
import { useStorage } from "../../contexts/userContext";
import { useToggle } from "../../hooks/useToggle";
import { addToList, removeFromList } from "../../hooks/useSiteReducer";
import CardIconWatching from "./CardIconWatching";

export default function CardWatching({ id }) {
  const [isWatching, toggle] = useToggle(false);
  const { watchState, watchDispatch } = useStorage();
  const willWatch = watchState.watching.find((item) => item.id === id);
  const data = willWatch ? willWatch.value : "noData";

  const handleClick = (e) => {
    const value = e.target.dataset.watch;
    watchDispatch(addToList(id, value));
    toggle();
  };

  const handleRemove = () => {
    watchDispatch(removeFromList(id));
    toggle();
  };

  return (
    <>
      <CardIconWatching data={data} toggle={toggle} />
      {isWatching && (
        <ul
          className="flex flex-col absolute py-1 bottom-5 right-10 bg-backgroundSecondary text-textPrimary shadow-md shadow-backgroundPrimary transition-shadow cursor-pointer"
          onMouseLeave={toggle}
        >
          <li
            className="flex items-center p-2 hover:bg-backgroundPrimary gap-2 text-sm"
            onClick={handleClick}
            data-watch="willWatch"
          >
            <BsCheck className="bg-green-500 p-0.5 w-5 h-5 rounded-full text-textPrimary" />
            Watching
          </li>
          <li
            className="flex items-center p-2 hover:bg-backgroundPrimary gap-2 text-sm"
            onClick={handleClick}
            data-watch="maybeWatching"
          >
            <BsQuestion className="bg-orange-500 p-0.5 w-5 h-5 rounded-full text-textPrimary" />
            Maybe Watching
          </li>
          <li
            className="flex items-center p-2 hover:bg-backgroundPrimary gap-2 text-sm"
            onClick={handleClick}
            data-watch="notWatching"
          >
            <BsX className="bg-red-500 p-0.5 w-5 h-5 rounded-full text-textPrimary" />
            Not Watching
          </li>
          {data !== "noData" && (
            <li
              className="flex items-center justify-center p-2 font-semibold border-t border-t-slate-500 border-w hover:bg-backgroundPrimary gap-2 text-sm"
              onClick={handleRemove}
            >
              Clear
            </li>
          )}
        </ul>
      )}
    </>
  );
}
