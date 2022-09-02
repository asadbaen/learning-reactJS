import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ itemPerPage, totalItem, paginate, currentPage }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <>
      <ul className="pagination">
        {pageNumber.length > 1
          ? pageNumber.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? "active" : null
                }`}
              >
                <Link
                  to={""}
                  onClick={() => paginate(number)}
                  className="page-link"
                >
                  <span>{number}</span>
                </Link>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};
export default Pagination;
