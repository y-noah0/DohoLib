// TopReadersTable.jsx
import React from "react";
import styles from "./Topreaders.module.css";
import Button from "../../../Defaults/Buttons/Button";

const topReaders = [
  { rank: "001", userName: "John Doe", booksRead: 12, booksBorrowed: 15 },
  { rank: "002", userName: "Jane Smith", booksRead: 11, booksBorrowed: 13 },
];

const TopReaders = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.text}>
        <h3>Top Readers</h3>
        <Button variant="viewmore" >
          View More
        </Button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User Name</th>
            <th>Books Read</th>
            <th>Books Borrowed</th>
          </tr>
        </thead>
        <tbody>
          {topReaders.map((reader, index) => (
            <tr key={index}>
              <td>{reader.rank}</td>
              <td>{reader.userName}</td>
              <td>{reader.booksRead}</td>
              <td>{reader.booksBorrowed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopReaders;