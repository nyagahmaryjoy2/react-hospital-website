import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <section className="flex  ">
        <Sidebar />
        <div className="container ">
          <Header />

          {/* Content */}
        </div>
      </section>
    </>
  );
};

export default Dashboard;

// import Sidebar from "./Sidebar";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard(){
//      const navigate = useNavigate();

//      const handleClick =() => {navigate('dashboard')};

//     return(
//         <div>
//             <Sidebar/>
//         <h1>Welcome to Dashboared</h1>
//         <button onClick={()=>handleClick()}></button>
//         </div>
//     );
// };
