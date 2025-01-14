import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import BillingFilters from "./BillingFilters";

const Billing = () => {
  // const [tab]

  return (
    <>
      <section className="flex  ">
        <Sidebar />
        <div className="container ">
          <Header />

          {/* Content */}

          <div>
            {/* <div className="row  flex justify-center   "></div> */}

            <BillingFilters />
          </div>
        </div>
      </section>
    </>
  );
};

export default Billing;

// import Sidebar from "./Sidebar";
// import { useNavigate } from "react-router-dom";

// export default function Billing(){
//      const navigate = useNavigate();

//      const handleClick =() => {navigate('billing')};

//     return(
//         <div>
//             <Sidebar/>
//         <h1>Welcome to Billing</h1>
//         <button onClick={()=>handleClick()}></button>
//         </div>
//     );
// };
