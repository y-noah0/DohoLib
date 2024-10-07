import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import AdminDash from '../AdminDash/Admindash'
import HandleAuthRole from '../Services/HandleAuthRole'
import Login from '../Auth/Login/Login'
//Admin dash imports
// import Menu from '../AdminDash/Defaults/Navigation/Menu/Menu'
// import Sidebar from '../AdminDash/Defaults/Navigation/Sidebar'
// import Categories from '../AdminDash/Pages/Books/Categories/Categories'
// import Category from '../AdminDash/Pages/Books/Category/Category'
// import Dashboard from '../AdminDash/Pages/Dashboard/Dashboard'


function AppRoutes(){
    return (
    <Router>
        <Routes>
            <Route path='/' component={<HandleAuthRole/>} />
            <Route path='/login' component={Login} />
        </Routes>
      </Router>
    )
}
export default AppRoutes