import { BsCheck } from "react-icons/bs";
import { useStorage } from "../../contexts/userContext";
import { updateItem } from "../../hooks/useSiteReducer";

export default function Settings() {
  const { userState, userDispatch, setLocalTheme } = useStorage();

  const handleClick = (key) => (e) => {
    const value = e.target.dataset.value;
    userDispatch(updateItem(key, value));
  };

  const handleTheme = (key) => (e) => {
    const value = e.target.dataset.value;
    userDispatch(updateItem(key, value));
    setLocalTheme(value);
  };

  return (
    <div className="md:-mt-24 mx-auto pb-16 relative">
      <div className="mx-auto max-w-2xl">
        <h2 className="flex font-bold text-2xl justify-center md:justify-start tracking-wide my-3 text-textTitle">
          Settings
        </h2>
        <div className="bg-backgroundPrimary p-12 pb-0 overflow-hidden rounded">
          <section className="mb-16">
            <h2 className="text-textSecondary font-semibold text-lg mb-2">
              Theme
            </h2>
            <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-2 md:gap-5 font-semibold text-base">
              <div
                data-value="theme-light"
                className="bg-backgroundSecondary text-textPrimary flex px-4 py-3 cursor-pointer rounded border-2 border-backgroundSecondary relative"
                onClick={handleTheme("theme")}
              >
                Light
                {userState.theme === "theme-light" && (
                  <BsCheck className="absolute right-3 bg-textPrimary w-6 h-6 rounded-full text-backgroundSecondary" />
                )}
              </div>
              <div
                data-value="theme-dark"
                className="bg-backgroundSecondary text-textPrimary flex px-4 py-3 cursor-pointer rounded border-2 border-backgroundSecondary relative"
                onClick={handleTheme("theme")}
              >
                Dark
                {userState.theme === "theme-dark" && (
                  <BsCheck className="absolute right-3 bg-textPrimary w-6 h-6 rounded-full text-backgroundSecondary" />
                )}
              </div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-textSecondary font-semibold text-lg mb-2">
              Title Language
            </h2>
            <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-2 md:gap-5 font-semibold text-base">
              <div
                data-value="romaji"
                className="bg-backgroundSecondary text-textPrimary flex px-4 py-3 cursor-pointer rounded border-2 border-backgroundSecondary relative"
                onClick={handleClick("language")}
              >
                Romaji
                {userState.language === "romaji" && (
                  <BsCheck className="absolute right-3 bg-textPrimary w-6 h-6 rounded-full text-backgroundSecondary" />
                )}
              </div>
              <div
                data-value="english"
                className="bg-backgroundSecondary text-textPrimary flex px-4 py-3 cursor-pointer rounded border-2 border-backgroundSecondary relative"
                onClick={handleClick("language")}
              >
                English
                {userState.language === "english" && (
                  <BsCheck className="absolute right-3 bg-textPrimary w-6 h-6 rounded-full text-backgroundSecondary" />
                )}
              </div>
              <div
                data-value="native"
                className="bg-backgroundSecondary text-textPrimary flex px-4 py-3 cursor-pointer rounded border-2 border-backgroundSecondary relative"
                onClick={handleClick("language")}
              >
                Native
                {userState.language === "native" && (
                  <BsCheck className="absolute right-3 bg-textPrimary w-6 h-6 rounded-full text-backgroundSecondary" />
                )}
              </div>
            </div>
          </section>
          <section className="mb-16">
            <h2 className="text-textSecondary font-semibold text-lg mb-2">
              Hide Anime I'm Not Watching
            </h2>
            <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-2 md:gap-5 font-bold text-base">
              <div
                data-value={true}
                className="bg-backgroundSecondary text-textPrimary flex px-4 py-3 cursor-pointer rounded border-2 border-backgroundSecondary relative"
                onClick={handleClick("hideWatchedAnime")}
              >
                Enabled
                {userState.hideWatchedAnime === "true" && (
                  <BsCheck className="absolute right-3 bg-textPrimary w-6 h-6 rounded-full text-backgroundSecondary" />
                )}
              </div>
              <div
                data-value={false}
                className="bg-backgroundSecondary text-textPrimary flex px-4 py-3 cursor-pointer rounded border-2 border-backgroundSecondary relative"
                onClick={handleClick("hideWatchedAnime")}
              >
                Disabled
                {userState.hideWatchedAnime === "false" && (
                  <BsCheck className="absolute right-3 bg-textPrimary w-6 h-6 rounded-full text-backgroundSecondary" />
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
