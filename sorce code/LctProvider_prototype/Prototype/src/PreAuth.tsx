import Home from './Home';


const PreAuth = ()=>{
    

    return(
       <>
            <section className='flex gap-6'>
                <Home userName={''} />
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