import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ReportSearch from "./components/ReportSearch";

const Reports = () => {
  return (
    <>
      <section className="flex  ">
        <Sidebar />
        <div className="container ">
          <Header />

          {/* Content */}
          <ReportSearch />
          {/* Content */}
          
            <div className="border space-y-4 max-h-96 border-gray-300 rounded-lgshadow-lg overflow-y-scroll p-4 bg-gray-100 ">
              <div className="history-header">
                <table className="w-full">
                  <thead className="text-left">
                    <tr className="bg-gray-100 text-gray-800 ">
                      <th>Visit Number</th>
                      <th> Member Number</th>
                      <th>Member Name</th>
                      <th> Payer</th>
                      <th>Scheme</th>
                      <th>Benefit</th>
                      <th>Date</th>
                      <th>Invoice Number</th>
                      <th>Total Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="even:bg-gray-50">
                      {/* <td>{members.visitNumber}</td>
                      <td>{memberId}</td>
                      <td>{memberNumber}</td>
                      <td>{name}</td>
                      <td>{payerName}</td>
                      <td>{scheme}</td>
                      <td>{benefit}</td>
                      <td>-</td>
                      <td>{action}</td> */}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          
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
