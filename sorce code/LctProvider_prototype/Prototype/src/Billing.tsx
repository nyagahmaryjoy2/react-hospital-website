
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Search from "./Search";
import { Link } from "react-router-dom";

const Billing = () => {
  
  return (
    <>
      <section className="flex  ">
        <Sidebar />
        <div className="container ">
          <Header />

          {/* Content */}
          <div className="container">
            <div className="row justify-between ">

              
              <ul>
                <Link to="">a</Link>
                <Link to="">b</Link>
                <Link to="">c</Link>
                <Link to="">d</Link>
                
              </ul>
            </div>
          </div>
          <Search />
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
