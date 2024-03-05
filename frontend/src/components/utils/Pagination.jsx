const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center my-4">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={`${
                currentPage === number
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500'
              } font-bold py-2 px-4 mx-1 rounded`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;