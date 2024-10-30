// Modal.jsx
import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = ({ isOpen, onClose, onAction }) => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [bookName, setBookName] = useState('');
  const [condition, setCondition] = useState('');
  const [returnDate, setReturnDate] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    onAction({ registrationNumber, bookName, condition, returnDate });
    onClose();
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Lend Book</h2>
        <button className={styles.closeButton} onClick={onClose}>✖</button>
        
        <div className={styles.form}>
          <label>Registration Number</label>
          <input
            type="text"
            placeholder="Registration number..."
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          />
          
          <label>Book Name</label>
          <input
            type="text"
            placeholder="Book Name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />

          <label>Condition</label>
          <select value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option value="" disabled>Condition</option>
            <option value="New">New</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
            <option value="Poor">Poor</option>
          </select>

          <label>Return Date</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        <button className={styles.actionButton} onClick={handleSubmit}>Done</button>
      </div>
    </div>
  );
};

export default Form;