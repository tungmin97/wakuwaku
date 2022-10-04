import { SiCrunchyroll, SiHulu, SiNetflix, SiYoutube } from "react-icons/si";
import { AiOutlineLink, AiOutlinePlayCircle } from "react-icons/ai";
import { useToggle } from "../../hooks/useToggle";

export default function CardMisc({ hashtag, links, trailer }) {
  const hashtagFormated = hashtag?.split(" ")[0].slice(1);
  const [isOpen, toggle] = useToggle(false);
  const renderLinkIcon = (site, url, index) => {
    switch (site) {
      case "Official Site":
        return (
          <a
            className="w-5 h-5 mx-1"
            href={url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLink />
          </a>
        );
      case "Funimation":
        return (
          <a
            className="w-5 h-5 mx-1"
            href={url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLink />
          </a>
        );
      case "Hidive":
        return (
          <a
            className="w-5 h-5 mx-1"
            href={url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLink />
          </a>
        );
      case "Crunchyroll":
        return (
          <a
            className="w-5 h-5 mx-1"
            href={url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCrunchyroll />
          </a>
        );
      case "VRV":
        return (
          <a
            className="w-5 h-5 mx-1"
            href={url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineLink />
          </a>
        );
      case "Hulu":
        return (
          <a
            className="w-5 h-5 mx-1"
            href={url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiHulu />
          </a>
        );
      case "Netflix":
        return (
          <a
            className="w-5 h-5 mx-1"
            href={url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiNetflix />
          </a>
        );
      case "Youtube":
        return (
          <a
            className="w-5 h-5 mx-1"
            href={url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiYoutube />
          </a>
        );
    }
  };

  return (
    <>
      <div className="flex w-full absolute left-0 transition-all duration-500 ease-in-out delay-75 transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 z-20">
        <div className="flex flex-col w-8/12">
          <div className="mt-1 text-xl font-semibold text-textPrimary xl:text-base xs:text-base">
            {hashtag && (
              <a
                className=""
                href={`https://twitter.com/search?q=%23${hashtagFormated}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hashtagFormated}
              </a>
            )}
          </div>
          <div className="flex flex-wrap mt-2 h-5 overflow-hidden text-xl font-semibold text-textPrimary xl:text-base xs:text-base">
            {links.map((element, index) =>
              renderLinkIcon(element.site, element.url, index)
            )}
          </div>
        </div>
        {trailer && (
          <div onClick={toggle} className="flex w-4/12 relative cursor-pointer">
            <div className="relative before:absolute before:top-0 before:w-full before:h-full before:bg-zinc-900 before:opacity-60">
              <img
                className="w-full h-full"
                src={trailer.thumbnail}
                alt="Trailer Thumbnail"
                href={links}
                loading="lazy"
              />
            </div>
            <AiOutlinePlayCircle className="absolute inset-0 flex m-auto w-6 h-6" />
          </div>
        )}
      </div>
      {isOpen && (
        <div
          className="fixed w-full h-full top-0 left-0 z-30 before:absolute before:top-0 before:w-full before:h-full before:bg-slate-900 before:opacity-95"
          onClick={toggle}
        >
          <div className="fixed inset-0 m-auto z-50 w-5/6 aspect-video bg-zinc-500 opacity-100">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${
                trailer && trailer.id
              }?autoplay=1&mute=1&modestbranding`}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
