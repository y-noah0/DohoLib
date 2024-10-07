import styles from './Overdue.module.css';
import book1 from '../../../../assets/Images/TopChoices/book1.png';
import book2 from '../../../../assets/Images/TopChoices/book2.png';
import book3 from '../../../../assets/Images/TopChoices/book3.png';
import Button from "../../../Defaults/Buttons/Button";


const Overdue = () => {
  const overdueBooks = [
    { userId: '001', username: 'Kwihangana Enock', bookId: 'F8-24b', bookTitle: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', overdueDays: 5, status: 'Lost', cover: `${book1}` },
    { userId: '455', username: 'Irabizi Yannick Noah', bookId: 'F9-24Y', bookTitle: 'The Art of War', author: 'Sun Tzu', overdueDays: 2, status: 'Retrieved', cover: `${book2}` },
    { userId: '002', username: 'MUHIRE Jean Deu', bookId: 'F8-34b', bookTitle: 'The Subtle Art Of Not Giving A F*ck', author: 'Mark Manson', overdueDays: 1, status: 'Lost', cover: `${book3}` },
    { userId: '003', username: 'MUHIRE Jean Deu', bookId: 'F8-34c', bookTitle: 'The Subtle Art Of Not Giving A F*ck', author: 'Mark Manson', overdueDays: 1, status: 'Lost', cover: `${book3}` },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Books Overdue</h2>
        <Button variant="viewmore" >
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
          {overdueBooks.map((book) => (
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