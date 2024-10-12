import { Routes, Route } from "react-router-dom";
import Menu from "./Defaults/Navigation/Menu/Menu";
import Sidebar from "./Defaults/Navigation/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Categories from "./Pages/Books/Categories/Categories";
import style from "./Admindash.module.css";
import Overdue from "./Pages/Dashboard/Overdue/Overdue";
import BookList from "./Pages/Books/Category/BookList/BookList";
import Reservation from "./Pages/Dashboard/Reservations/Resevations";

function AdminDash() {
  return (
    <div className={style.container}>
      <Menu />
      <Sidebar />
      <div className={style.content}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<Categories />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/overdue" element={<Overdue />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDash;