import React, { useState, useEffect } from "react";
import styles from "./Reservations.module.css";
import Button from "../../../Defaults/Buttons/Button";
import reservationsData from "./ReservationData.json";

const Reservation = ({ inDashboard }) => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    setReservations(reservationsData);
  }, []);

  const displayedReservations = inDashboard
    ? reservations.slice(0, 3)
    : reservations;

  return (
    <div
      className={`${styles.tableContainer} ${
        !inDashboard ? styles.wideTableContainer : ""
      }`}
    >
      <div className={styles.text}>
        <h3>Reservation</h3>
        <Button variant="viewmore">
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
          {displayedReservations.map((reservation) => (
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