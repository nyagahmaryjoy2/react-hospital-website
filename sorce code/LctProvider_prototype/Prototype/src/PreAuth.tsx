import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
     const navigate = useNavigate();

     const handleClick =() => {navigate('pre-Auth')};
        
     
    
    return(
        <div>
            <Sidebar/>
        <h1>Welcome to Pre-auth</h1>
        <button onClick={()=>handleClick()}></button>
        </div>
    );
};