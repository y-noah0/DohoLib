import React, { useState, useEffect } from "react";
import styles from "./Overdue.module.css";
import Button from "../../../Defaults/Buttons/Button";
import overdueBooksData from "./OverdueData.json";

const Overdue = ({ inDashboard }) => {
  const [overdueBooks, setOverdueBooks] = useState([]);

  useEffect(() => {
    setOverdueBooks(overdueBooksData);
  }, []);

  const displayedBooks = inDashboard ? overdueBooks.slice(0, 3) : overdueBooks;

  return (
    <div className={`${styles.container} ${!inDashboard ? styles.largeContainer : ""}`}>
      <div className={styles.header}>
        <h2>Books Overdue</h2>
        <Button variant="viewmore">
          View More
        </Button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Book ID</th>
            <th>Book Title</th>
            <th>Author</th>
            <th>Overdue</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayedBooks.map((book) => (
            <tr key={book.bookId}>
              <td>{book.userId}</td>
              <td>{book.username}</td>
              <td>{book.bookId}</td>
              <td>
                <img src={book.cover} alt={book.bookTitle} className={styles.bookImage} />
                {book.bookTitle}
              </td>
              <td>{book.author}</td>
              <td>{book.overdueDays} days</td>
              <td className={`${styles.status} ${styles[book.status]}`}>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overdue;
