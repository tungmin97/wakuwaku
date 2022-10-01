import { FiSearch } from "react-icons/fi";
import { FaSort } from "react-icons/fa";
import { useToggle } from "../../hooks/useToggle";

export default function NavSearch({ filter, sort, language, isMobile }) {
  const [isSearch, toggle] = useToggle(false);

  return (
    <>
      {!isMobile ? (
        <div className="h-10">
          <div className="flex justify-end">
            {isSearch && (
              <input
                autoFocus
                role="search"
                placeholder="Filter Anime"
                className="bg-slate-800 px-3 rounded text-base font-semibold leading-10 focus:outline-none"
                onChange={filter}
                onBlur={toggle}
              />
            )}
            <FiSearch
              className="self-center ml-3 w-7 h-7 cursor-pointer text-slate-400"
              onClick={toggle}
            />
            <FaSort className="self-center mx-1 w-7 h-7 text-slate-400 pt-1 pl-2" />
            <select
              className="ml-2 px-3 py-2 rounded bg-slate-800 focus:outline-none"
              onChange={sort}
            >
              <option value="POPULARITY_DESC">Popularity</option>
              <option value={`TITLE_${language.toUpperCase()}`}>Title</option>
              <option value="START_DATE_DESC">Next Airing Episode</option>
              <option value="SCORE_DESC">Score</option>
            </select>
          </div>
        </div>
      ) : (
        <div className="flex mb-5 basis-auto">
          <input
            role="search"
            placeholder="Filter Anime"
            className="bg-slate-600 flex-grow px-3 rounded text-base font-semibold leading-10 focus:outline-none"
            onChange={filter}
            onBlur={toggle}
          />
          <select
            className="flex-shrink ml-2 px-3 py-2 rounded bg-slate-600 focus:outline-none"
            onChange={sort}
          >
            <option value="POPULARITY_DESC">Popularity</option>
            <option value={`TITLE_${language.toUpperCase()}`}>Title</option>
            <option value="START_DATE_DESC">Next Episode</option>
            <option value="SCORE_DESC">Score</option>
          </select>
        </div>
      )}
    </>
  );
}
