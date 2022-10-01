export default function Loading() {
  return (
    <div
      role="progressbar"
      className="flex flex-row h-64 min-w-sm text-left rounded bg-backgroundPrimary"
    >
      <div className="w-5/12 lg:w-[36%] bg-backgroundWatched animate-pulse rounded-sm"></div>
      <div className="w-7/12 lg:w-[64%] p-4 rounded-sm">
        <p className="leading-relaxed mb-3 w-full h-6 animate-pulse bg-gray-600"></p>
        <br />
        <p className="leading-relaxed mb-3 w-full h-2 animate-pulse bg-gray-600"></p>
        <p className="leading-relaxed mb-3 w-full h-2 animate-pulse bg-gray-600"></p>
        <p className="leading-relaxed mb-3 w-2/3 h-2 animate-pulse bg-gray-600"></p>
        <p className="leading-relaxed mb-3 w-1/2 h-2 animate-pulse bg-gray-600"></p>
      </div>
    </div>
  );
}
