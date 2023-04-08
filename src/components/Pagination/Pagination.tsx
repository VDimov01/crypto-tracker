import {useState} from 'react';
import './Pagination.css';


interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (pageNumber: number) => void;
  }
  
export const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
  }) => {
    const pageNumbers: (number | string)[] = [];
  
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 6) {
        for (let i = 1; i <= 10; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 5) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 9; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 3; i <= currentPage + 3; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }
  
    const handlePageChange = (pageNumber: number) => {
      if (pageNumber < 1 || pageNumber > totalPages) {
        return;
      }
      onPageChange(pageNumber);
    };
  
    return (
      <ul className="pagination">
        <li className={currentPage === 1 ? "disabled" : ""}>
          <a href="#" onClick={() => handlePageChange(currentPage - 1)}>
            &laquo;
          </a>
        </li>
        {pageNumbers.map((pageNumber: number | string, index: number) => {
          return (
            <li key={index} className={pageNumber === "..." ? "disabled" : ""}>
              {pageNumber === "..." ? (
                <span>...</span>
              ) : (
                <a
                  href="#"
                  onClick={() => handlePageChange(pageNumber as number)}
                  className={pageNumber === currentPage ? "active" : ""}
                >
                  {pageNumber}
                </a>
              )}
            </li>
          );
        })}
        <li className={currentPage === totalPages ? "disabled" : ""}>
          <a href="#" onClick={() => handlePageChange(currentPage + 1)}>
            &raquo;
          </a>
        </li>
      </ul>
    );
  };
  