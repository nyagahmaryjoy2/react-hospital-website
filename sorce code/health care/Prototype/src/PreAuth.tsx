import { useState } from "react";
import DownloadButton from "./components/DownloadButton";
import Header from "./components/Header";
import PreAuthSearch from "./components/PreAuthSearch";
import Sidebar from "./components/Sidebar";
import Select from "react-select";

const PreAuth = () => {
   const [selectedOption, setSelectedOption] = useState(null);
   const request = [
     { value: "Pre-authorization", label: "Pre-authorization" },
     { value: "Addmisions", label: "Addmisions" },
     { value: "Emergency Admission", label: "Emergency Admission" },
   ];
  return (
    <>
      <section className="flex  ">
        <Sidebar />
        <div className="container ">
          <Header />

          {/* Content */}
          <PreAuthSearch />
          <div className="flex items-center justify-between p-4">
            <div className="flex min-w-44 max-w-xs">
              <Select
                options={request}
                value={selectedOption}
                // onChange={handleChange}
                placeholder="All Status"
              />
            </div>
            <DownloadButton />
          </div>
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
