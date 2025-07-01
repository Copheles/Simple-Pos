type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const renderPages = () => {
    const pages = [];

    const createButton = (page: number, isActive = false) => (
      <button
        key={page}
        onClick={() => onPageChange(page)}
        className={`px-3 py-1 rounded text-sm border border-gray-300 cursor-pointer ${
          isActive ? "bg-indigo-500 text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        {page}
      </button>
    );

    if (totalPages < 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(createButton(i, currentPage === i));
      }
    } else if (currentPage <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(createButton(i, currentPage === i));
      }

      pages.push(
        <button
          key="dots-right"
          onClick={() => onPageChange(currentPage + 5)}
          className="px-3 py-1 rounded text-sm border border-gray-300 bg-gray-100 text-gray-700 cursor-pointer"
        >
          ...
        </button>
      );
      pages.push(createButton(totalPages, currentPage === totalPages));
    } else if (currentPage > 4 && totalPages - currentPage > 3) {
      pages.push(createButton(1, currentPage === 1));
      pages.push(
        <button
          key="dots-left"
          onClick={() => onPageChange(currentPage - 5 <= 0 ? 1 : currentPage - 5)}
          className="px-3 py-1 rounded text-sm border border-gray-300 bg-gray-100 text-gray-700 cursor-pointer"
        >
          ...
        </button>
      );

      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pages.push(createButton(i, currentPage === i));
      }

      pages.push(
        <button
          key="dots-right"
          onClick={() => onPageChange(currentPage + 5 > totalPages ? totalPages: currentPage + 5)}
          className="px-3 py-1 rounded text-sm border border-gray-300 bg-gray-100 text-gray-700 cursor-pointer"
        >
          ...
        </button>
      );
      pages.push(createButton(totalPages, currentPage === totalPages));
    } else {
      pages.push(createButton(1, currentPage === 1));
      pages.push(
        <button
          key="dots-left"
          onClick={() => onPageChange(currentPage - 5)}
          className="px-3 py-1 rounded text-sm border border-gray-300 bg-gray-100 text-gray-700 cursor-pointer"
        >
          ...
        </button>
      );

      for (let i = totalPages - 4; i <= totalPages; i++) {
        pages.push(createButton(i, currentPage === i));
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center flex-wrap gap-2 my-10">
      {renderPages()}
    </div>
  );
}
