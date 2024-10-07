import styles from './TopChoices.module.css';
import book1 from '../../../../assets/Images/TopChoices/book1.png';
import book2 from '../../../../assets/Images/TopChoices/book2.png';
import book3 from '../../../../assets/Images/TopChoices/book3.png';
import book4 from '../../../../assets/Images/TopChoices/book4.png';
import book5 from '../../../../assets/Images/TopChoices/book5.png';

const Topchoices = () => {
  return (
    
    <div className={styles.container}>
      <div className={styles.topChoicesWrapper}>
        <h1>Top Choices</h1>
        <div className={styles.topChoicescards}>
          <div className={styles.topChoicescard}>
            <img src={book1} alt="Book 1" />
          </div>
          <div className={styles.topChoicescard}>
            <img src={book2} alt="Book 2" />
          </div>
          <div className={styles.topChoicescard}>
            <img src={book3} alt="Book 3" />
          </div>
          <div className={styles.topChoicescard}>
            <img src={book4} alt="Book 4" />
          </div>
          <div className={styles.topChoicescard}>
            <img src={book5} alt="Book 5" />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Topchoices;