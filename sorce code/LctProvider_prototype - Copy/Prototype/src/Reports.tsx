import Home from './Home';


const Reports = ()=>{
    

    return(
        <>
            <section className='flex gap-6'>
                 <Home userName={''} />
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