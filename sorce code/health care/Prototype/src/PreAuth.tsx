import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const PreAuth = () => {
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

export default PreAuth;

// import Sidebar from "./Sidebar";
// import { useNavigate } from "react-router-dom";

// export default function PreAuth(){
//      const navigate = useNavigate();

//      const handleClick =() => {navigate('pre-Auth')};

//     return(
//         <div>
//             <Sidebar/>
//         <h1>Welcome to Pre-auth</h1>
//         <button onClick={()=>handleClick()}></button>
//         </div>
//     );
// };
