import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Reports = () => {
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

export default Reports;

// import Sidebar from "./Sidebar";
// import { useNavigate } from "react-router-dom";

// export default function Reports(){
//      const navigate = useNavigate();

//      const handleClick =() => {navigate('report')};

//     return(
//         <>
//        <Sidebar/>
//         <div>

//         <h1>Welcome to Reports</h1>
//         <button onClick={()=>handleClick()}></button>
//         </div>
//          </>
//     );
// };
