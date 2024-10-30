// Pagination.jsx
import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1); // Create an array of page numbers

  return (
    <div className={styles.pagination}>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={currentPage === pageNumber ? styles.activePage : ''}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;