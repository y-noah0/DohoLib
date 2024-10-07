import Analytics from "./Analytics/Analytics";
import Header from "./Header/Header";
import Issued from "./Issued/Issued"
function Dashboard(){
    return(
        <div>
            <Header />
            <Analytics />
            <Issued />
        </div>
    )
}
export default Dashboard;