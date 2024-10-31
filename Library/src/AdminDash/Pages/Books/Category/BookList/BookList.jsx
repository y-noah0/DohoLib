// BookList.jsx
import { useState, useEffect } from 'react';
import styles from './BookList.module.css';
import BookRow from '../BookRow/BookRow';
import { Search } from '@mui/icons-material'; // Importing the search icon
import booksData from './booksData.json'; // Adjust path if necessary
import Pagination from '../../../../Defaults/Pagination/Pagination'; // Import the Pagination component

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  // Load books from the local JSON file
  useEffect(() => {
    // Setting books data from the imported JSON
    setBooks(booksData);
  }, []);

  // Filter books based on search query
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total pages and displayed books
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const displayedBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage
  );

  // Handle Search Input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to page 1 when search query changes
  };

  // Handle Pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.bookListContainer}>
      <div className={styles.header}>
        <h1>All Books</h1>
        
        {/* Search Section */}
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search Books..."
            value={searchQuery}
            onChange={handleSearch}
            className={styles.searchInput}
          />
          <Search className={styles.searchIcon} />
        </div>
        
        <button className={styles.addButton}>Add Book</button>
      </div>
      
      {/* Books Table */}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Book Title</th>
            <th>Author</th>
            <th>Cover Image</th>
            <th>Category</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {displayedBooks.map((book) => (
            <BookRow key={book.id} book={book} />
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default BookList;