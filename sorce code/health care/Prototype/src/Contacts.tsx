import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const Contacts = () => {
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
