import { BsPlusCircle, BsCheck, BsQuestion, BsX } from "react-icons/bs";

export default function CardIconWatching({ data, toggle }) {
  const getIcon = (data) => {
    switch (data) {
      case "willWatch":
        return (
          <BsCheck className="bg-green-500 p-0.5 w-6 h-6 rounded-full text-slate-700" />
        );
      case "maybeWatching":
        return (
          <BsQuestion className="bg-orange-500 p-0.5 w-6 h-6 rounded-full text-slate-700" />
        );
      case "notWatching":
        return (
          <BsX className="bg-red-500 p-0.5 w-6 h-6 rounded-full text-slate-700" />
        );
      default:
        return (
          <BsPlusCircle className="bg-backgroundWatched p-0.5 w-6 h-6 rounded-full text-textTitle" />
        );
    }
  };

  return (
    <div className="ml-auto cursor-pointer select-none" onMouseEnter={toggle}>
      {getIcon(data)}
    </div>
  );
}
