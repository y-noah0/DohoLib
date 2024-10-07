import React from "react";
import style from "./Menu.module.css";
import Logo from "../../../../assets/Images/Navbar/logo.png";
import profile from "../../../../assets/Images/Navbar/profile.jpg";
import { Notifications, Search } from "@mui/icons-material";


const Menu = () => {
  return (
    <div className={style.navbar}>
      {/* Logo Section */}
      <div className={style.logo}>
        <span>
          <img src={Logo} alt="logo" />
        </span>
        <h2>DOHO Library</h2>
      </div>

      {/* Search Section */}
      <div className={style.search}>
        <input type="text" placeholder="Search" className={style.searchInput} />
        <Search className={style.searchIcon} />
      </div>

      {/* Right Icons (Notification + Profile) */}
      <div className={style.acc}>
        <div className={style.notification}>
          <Notifications className={style.notificationIcon} />
        </div>
        <div className={style.profile}>
          <span>
            <img src={profile} alt="Profile" className={style.profileImage} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
