// Borrowing.jsx
import  { useState, useEffect } from "react";
import styles from "./Borrowing.module.css";
import Button from "../../../Defaults/Buttons/Button";
import Form from "../Form/Form"; // Import the Modal component
import BorrowingBooksData from "./BorrowedData.json"; // Adjust path as necessary
import { FaSearch } from "react-icons/fa";
import Pagination from "../../../Defaults/Pagination/Pagination";

const Borrowing = ({ inDashboard }) => {
  const [borrowingBooks, setBorrowingBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("This week");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const booksPerPage = inDashboard ? 3 : 5;

  useEffect(() => {
    // Fetch data from JSON file
    setBorrowingBooks(BorrowingBooksData);
  }, []);

  // Filter books based on search term
  const filteredBooks = borrowingBooks.filter((book) =>
    book.BookTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  // Get current books to display
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const displayedBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Open modal handler
  const openModal = () => setIsModalOpen(true);

  // Close modal handler
  const closeModal = () => setIsModalOpen(false);

  // Action to perform inside the modal
  const handleLendAction = () => {
    console.log("Book lending action completed!");
    // Any additional logic for lending a book
  };

  return (
    <div className={`${styles.container} ${!inDashboard ? styles.largeContainer : ""}`}>
      <div className={styles.header}>
        <h2>Borrowing</h2>
        <Button variant="viewmore" onClick={openModal}>Lend Book</Button>
      </div>

      {/* Navigation and Search Section */}
      <div className={styles.navSearchFilter}>
        <h3>History</h3>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by Book title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <FaSearch className={styles.searchIcon} />
        </div>
        <div className={styles.filterContainer}>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="This week">This week</option>
            <option value="This month">This month</option>
          </select>
        </div>
      </div>

      {/* Table Section */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>UserName</th>
            <th>Class</th>
            <th>Book Title</th>
            <th>Author</th>
            <th>Days remaining</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {displayedBooks.map((book, index) => (
            <tr key={index}>
              <td>{book.UserID}</td>
              <td>{book.UserName}</td>
              <td>{book.Class}</td>
              <td>
                <img
                  src={book.Cover}
                  alt={book.BookTitle}
                  className={styles.bookImage}
                />
                {book.BookTitle}
              </td>
              <td>{book.Author}</td>
              <td>{book.DaysRemaining}</td>
              <td className={`${styles.status} ${styles[book.Status.toLowerCase()]}`}>
                {book.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Section */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      {/* Modal Component */}
      <Form isOpen={isModalOpen} onClose={closeModal} onAction={handleLendAction} />
    </div>
  );
};

export default Borrowing;
