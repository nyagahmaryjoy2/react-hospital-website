import { Link } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { FaLocationDot } from "react-icons/fa6";
import { PiOfficeChairDuotone } from "react-icons/pi";

const Dashboard = () => {
  return (
    <>
      <section className="flex  ">
        <div className="flex">
          <Sidebar />
        </div>

        <div className="container ">
          <Header />

          {/* Content  in div h-screen flex justify-center items-center*/}

          <div className="row flex justify-evenly p-8 ">
            <button
              className=" text-lg text-white top-2 right-2 px-28 py-20  rounded-3xl"
              style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}
            >
              <div className="flex justify-center space-x-32 items-center">
                <FaLocationDot size={50} />
                <div className="">
                  <span className="">Active Visits</span>
                  <div>
                    <Link to="/activeVisits">
                      {/**number of active vits that is trackked */} 4 visits
                    </Link>
                  </div>
                </div>
              </div>
            </button>
            <button
              className=" text-white  top-2 right-2 px-28 py-20 rounded-3xl"
              style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}
            >
              <div className="flex justify-center space-x-32 items-center">
                <PiOfficeChairDuotone size={50} />
                <div className="">
                  <span className=""> Closed Visits</span>
                  <div>
                    <Link to="/history">
                      {/**track closed visits */} 5 Visits
                    </Link>
                  </div>
                </div>
              </div>
            </button>
          </div>
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
