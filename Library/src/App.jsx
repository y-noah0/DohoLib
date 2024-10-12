import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDash from "./AdminDash/Admindash";


function App() {
  return (
    <Router>
      <AdminDash />
    </Router>
  );
}

export default App;