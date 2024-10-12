import React from 'react';
import styles from './BookRow.module.css';

const BookRow = ({ book }) => {
  return (
    <tr className={styles.bookRow}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <img src={book.coverImage} alt={book.title} className={styles.coverImage} />
      </td>
      <td>{book.category}</td>
      <td>{book.quantity}</td>
    </tr>
  );
};

export default BookRow;