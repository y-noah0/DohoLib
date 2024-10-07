// ReservationTable.jsx
import React from "react";
import styles from "./Reservations.module.css";
import Button from "../../../Defaults/Buttons/Button";

const reservations = [
  { userId: "001", bookName: "1984", author: "George Orwell", status: "Pending" },
  { userId: "002", bookName: "To Kill a Mockingbird", author: "Harper Lee", status: "Expired" },
];

const Reservation = () => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.text}>
        <h3>Reservation</h3>
        <Button variant="viewmore" >
          View More
        </Button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Reservation status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation, index) => (
            <tr key={reservation.userId}>
              <td>{reservation.userId}</td>
              <td>{reservation.bookName}</td>
              <td>{reservation.author}</td>
              <td>{reservation.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservation;