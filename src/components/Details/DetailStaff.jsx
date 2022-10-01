import { useExpand } from "../../hooks/useExpand";

export default function DetailStaff({ staff }) {
  const { filtered, isExpanded, handleClick } = useExpand(staff.slice(0, 6));

  return (
    <div className="mb-10">
      <h2 className="text-textPrimary text-base font-semibold mb-3">Staff</h2>
      <div className="text-textPrimary grid md:grid-cols-2 gap-8 gap-y-3 md:gap-y-5 mb-3">
        {filtered.map((ent) => (
          <div
            className="flex bg-backgroundSecondary rounded"
            key={ent.node.id}
          >
            <img
              className="w-1/5 h-full object-cover rounded-l"
              src={ent.node.image.large}
              alt="Staff image"
            />
            <div className="w-4/5 p-2 pl-3 flex flex-col justify-between">
              <div className="text-base">{ent.node.name.full}</div>
              <div className="text-sm text-textSecondary">{ent.role}</div>
            </div>
          </div>
        ))}
      </div>
      {staff.length > 6 && (
        <div className="flex justify-center">
          {!isExpanded ? (
            <button
              className="text-textPrimary hover:text-colorTheme"
              onClick={() => handleClick(staff)}
            >
              See More
            </button>
          ) : (
            <button
              className="text-textPrimary hover:text-colorTheme"
              onClick={() => handleClick(staff.slice(0, 6))}
            >
              See Less
            </button>
          )}
        </div>
      )}
    </div>
  );
}
