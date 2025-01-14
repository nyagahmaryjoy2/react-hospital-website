import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";

const Contacts = () => {
  return (
    <>
      <section className="flex ">
        <Sidebar />
        <div className="container  ">
          {/* Content */}
          <Header />
          <div className="flex flex-wrap bg-gray-100">
            <div className=" flex border   p-3 m-3 h-80 space-y-4 justify-center   space-x-1  rounded-3xl rounded-lgshadow-lg bg-white">
              {/**email section */}

              <div className=" flex flex-col  space-y-3  p-3 items-center">
                <div className="text-blue-500">
                  <RiContactsLine size={20} />
                </div>
                <span>
                  <b>Email Us</b>
                </span>
                <span>
                  Email us for general enquiries, pre-auth requests and
                  reimbursement requests.{" "}
                </span>
                <Link to="" className="text-blue-900">
                  contactcentre@healthcare.net
                </Link>
              </div>
              {/**Call section */}
              <div className="flex flex-col space-y-3  p-3 items-center">
                <div className="text-blue-500">
                  <MdAddIcCall size={20} />
                </div>
                <span>
                  <b>Call Us</b>
                </span>
                <span>
                  Email us for general enquiries, pre-auth requests and
                  reimbursement requests.{" "}
                </span>
                <Link to="" className="text-blue-900">
                  contactcentre@healthcare.net
                </Link>
              </div>
              {/**Visit Section */}
              <div className="flex flex-col space-y-3  p-3 items-center">
                <div className="text-blue-500">
                  <MdMyLocation size={20} />
                </div>
                <span>
                  <b>Visit Us</b>
                </span>
                <span>
                  Email us for general enquiries, pre-auth requests and
                  reimbursement requests.{" "}
                </span>
                <Link to="" className="text-blue-900">
                  contactcentre@healthcare.net
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;

// import Sidebar from "./Sidebar";
// import { useNavigate } from "react-router-dom";

// export default function Dashboard(){
//      const navigate = useNavigate();

//      const handleClick =() => {navigate('contacts')};

//     return(
//         <div>
//             <Sidebar/>
//         <h1>Welcome to contacts</h1>
//         <button onClick={()=>handleClick()}></button>
//         </div>
//     );
// };
