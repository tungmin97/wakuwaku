import { ImSpinner2 } from "react-icons/im";

export default function LoadingDetail() {
  return (
    <div
      role="progressbar"
      className="w-full h-screen md:h-auto bg-backgroundPrimary -mt-28"
    >
      <div className="w-full h-72 md:h-96 object-cover object-top rounded-sm" />
      <div className="lg:max-w-screen-xl h-72 mx-auto p-3 md:px-12 md:flex flex-col md:flex-row">
        <div className="w-2/5 h-72 md:h-auto mx-auto md:w-1/4 -mt-10 animate-pulse bg-backgroundSecondary rounded" />
        <div className="md:w-3/4 p-3 pt-5 md:pl-7 pb-2">
          <p className="leading-relaxed mx-auto md:ml-0 mb-3 w-1/3 h-6 animate-pulse bg-gray-600" />
          <br />
          <p className="leading-relaxed mx-auto md:ml-0 mb-3 w-2/3 h-2 animate-pulse bg-gray-600" />
          <p className="leading-relaxed mx-auto md:ml-0 mb-3 w-2/3 h-2 animate-pulse bg-gray-600" />
          <p className="leading-relaxed mx-auto md:ml-0 mb-3 w-2/3 h-2 animate-pulse bg-gray-600" />
          <p className="leading-relaxed mx-auto md:ml-0 mb-3 w-1/2 h-2 animate-pulse bg-gray-600" />
        </div>
      </div>
      <div className="hidden mt-8 px-3 md:px-12 h-screen lg:mx-auto relative md:flex flex-col md:flex-row gap-10">
        <div className="w-[23%] h-full bg-backgroundSecondary animate-pulse rounded" />
        <div className="w-[77%] h-full">
          <div className="w-full h-auto grid grid-cols-5 gap-8 mb-5">
            <div className="h-44 inline-block md:flex rounded mr-5 md:mr-0 bg-backgroundSecondary animate-pulse" />
            <div className="h-44 inline-block md:flex rounded mr-5 md:mr-0 bg-backgroundSecondary animate-pulse" />
            <div className="h-44 inline-block md:flex rounded mr-5 md:mr-0 bg-backgroundSecondary animate-pulse" />
            <div className="h-44 inline-block md:flex rounded mr-5 md:mr-0 bg-backgroundSecondary animate-pulse" />
            <div className="h-44 inline-block md:flex rounded mr-5 md:mr-0 bg-backgroundSecondary animate-pulse" />
            <div className="h-44 inline-block md:flex rounded mr-5 md:mr-0 bg-backgroundSecondary animate-pulse" />
            <div className="h-44 inline-block md:flex rounded mr-5 md:mr-0 bg-backgroundSecondary animate-pulse" />
            <div className="h-44 inline-block md:flex rounded mr-5 md:mr-0 bg-backgroundSecondary animate-pulse" />
            <div className="h-44 inline-block md:flex rounded mr-5 md:mr-0 bg-backgroundSecondary animate-pulse" />
            <div className="h-44 inline-block md:flex rounded mr-5 md:mr-0 bg-backgroundSecondary animate-pulse" />
          </div>
          <div className="w-full h-80 bg-backgroundSecondary animate-pulse" />
        </div>
      </div>
    </div>
  );
}
