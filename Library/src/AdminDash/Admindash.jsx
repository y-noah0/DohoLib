import Menu from "./Defaults/Navigation/Menu/Menu"
import Sidebar from "./Defaults/Navigation/Sidebar/Sidebar"
import Dashboard from "./Pages/Dashboard/Dashboard"
import style from "./Admindash.module.css"

function AdminDash() {
    return(
        <div className={style.container}>
          <Menu/>
          <Dashboard/>
          <Sidebar/>
         
        </div>
    )
}
export default AdminDash