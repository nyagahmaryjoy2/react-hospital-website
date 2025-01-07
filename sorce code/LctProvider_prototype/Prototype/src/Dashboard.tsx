import Home from "./Home";

const Dashboard = ()=>{
    

    return(
        <>
            <section className='flex gap-6'>
                <Home userName={''} />
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