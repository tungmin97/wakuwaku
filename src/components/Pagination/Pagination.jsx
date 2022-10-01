import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Pagination({ curPage, lastPage, paginate }) {
  return (
    <div className="flex justify-center gap-7 mb-10">
      <button
        disabled={curPage === 1}
        className="flex py-3 px-5 bg-backgroundPrimary rounded-2xl disabled:opacity-50"
        onClick={() => paginate(curPage - 1)}
      >
        <FiChevronLeft className="w-5 h-5" />
        Prev
      </button>

      <div className="py-3 px-5 bg-backgroundPrimary rounded-2xl">
        {curPage} of {lastPage}
      </div>
      <button
        disabled={curPage === lastPage}
        className="flex py-3 px-5 bg-backgroundPrimary rounded-2xl"
        onClick={() => paginate(curPage + 1)}
      >
        Next
        <FiChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
