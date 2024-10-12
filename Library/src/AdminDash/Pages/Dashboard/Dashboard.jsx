import Analytics from "./Analytics/Analytics";
import Header from "./Header/Header";
import Issued from "./Issued/Issued";
import TopReaders from "./Topreaders/Topreaders";
import styles from "./Dashboard.module.css";
import Reservation from "./Reservations/Resevations";
import Topchoices from "./TopChoices/Topchoices";
import Overdue from "./Overdue/Overdue";
import Stats from "../../Defaults/Stats/Stats";

// cards 
import bookIcon from "../../../assets/Images/status/bookIcon.png";
import totalbook from "../../../assets/Images/status/totalBooks.png";
import overdue from "../../../assets/Images/status/overdue.png";
import openedbook from "../../../assets/Images/status/openedBook.png";
import Categories from "../Books/Categories/Categories";
import BookList from "../Books/Category/BookList/BookList";
function Dashboard() {
    const datasets = [
        { data: [100, 200, 300, 400, 500], borderColor: "blue" },
        { data: [150, 250, 350, 450, 550], borderColor: "pink" },
      ];
      const labels = ["Jan", "Feb", "Mar", "Apr", "May"];
    
      const handleButtonClick = () => {
        alert("View Analytics clicked!");
      };
  return (
    <div className={styles.container}>
           <Header />
          <div className={styles.stats}>
            <Stats number="122" description="Total Visitors" icon={bookIcon} />
            <Stats number="96" description="Books Borrowed" icon={openedbook} />
            <Stats number="20" description="Books Overdue" icon={overdue} />
            <Stats number="7821" description="Total Books" icon={totalbook} />
          </div>
      <div className={styles.first}>
      
      <Reservation inDashboard={true} />
        <TopReaders />
      </div>
      <div className={styles.second}>
        <Topchoices />
        <Overdue inDashboard={true} />
      </div>

      <div className={styles.third}>
      <Analytics
      datasets={datasets}
      labels={labels}
      title="Monthly Data"
      onButtonClick={handleButtonClick}
    />
        <Issued />
      </div> 
    </div>
  );
}
export default Dashboard;
