import { useState } from "react";
import style from "./Sidebar.module.css";
import home from "../../../../assets/Images/Menu/home.png";
import books from "../../../../assets/Images/Menu/books.png";
import overdue from "../../../../assets/Images/Menu/overdue.png";
import reservation from "../../../../assets/Images/Menu/reservation.png";

function Sidebar() {
  const menubar = [
    { title: "Home", icon: home, path: "/" },
    { title: "Borrowing", icon: books, path: "/borrowing" },
    { title: "Books", icon: books, path: "/books" },
    { title: "Books Overdue", icon: overdue, path: "/overdue" },
    { title: "Reservation", icon: reservation, path: "/reservation" },
  ];

  return (
    <div className={style.menu}>
      <div className={style.menuWrapper}>
        {menubar.map((item, index) => (
          <div key={index} className={style.menuItems}>
            <img src={item.icon} alt={item.title.toLowerCase()} />
            <span>
              <h3>
                <a href={item.path}>{item.title}</a>
              </h3>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
