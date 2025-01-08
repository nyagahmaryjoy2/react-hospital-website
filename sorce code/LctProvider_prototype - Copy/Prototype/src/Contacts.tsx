import Home from "./Home";
import 'app.css';
import { AiFillContacts } from "react-icons/ai";



const Contacts = ()=>{
    

    return(
        <>
            <section className='flex gap-6'>
                <Home userName={''} />
                <div className='container'>
                    <div>
                        <AiFillContacts />


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