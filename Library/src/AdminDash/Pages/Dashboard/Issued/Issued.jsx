import styles from './Issued.module.css';
import Button from "../../../Defaults/Buttons/Button";
function Issued(){
    const data = [
        { rank: '001', userName: 'John Doe', booksRead: 12, booksBorrowed: 15 },
        { rank: '002', userName: 'Jane Smith', booksRead: 11, booksBorrowed: 13 },
      ];
    
      return (
        <div className={styles.tables}>
        
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
              {data.map((item) => (
                <tr key={item.rank}>
                  <td>{item.rank}</td>
                  <td>{item.userName}</td>
                  <td>{item.booksRead}</td>
                  <td>{item.booksBorrowed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      )
}
export default Issued