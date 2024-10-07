import styles from './Stats.module.css';
import {useState, useEffect} from 'react'
function Stats(){
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedPeriod, setSelectedPeriod] = useState("This week");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    return date
      .toLocaleDateString("en-US", options)
      .replace(",", "  |")
      .toUpperCase();
  };

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
  };
    return(
          <header className={styles.header}>
            <div className={styles.text}>
              <h1>
                Hello, <span className={styles.librarian}>Librarian</span>
              </h1>
              <p className={styles.date}>{formatDate(currentDateTime)}</p>
            </div>

            <div className={styles.dropdown}>
              <select value={selectedPeriod} onChange={handlePeriodChange}>
                <option value="This week">This week</option>
                <option value="2 weeks">2 weeks</option>
                <option value="This month">This month</option>
              </select>
            </div>
          </header>
    )
}
export default Stats