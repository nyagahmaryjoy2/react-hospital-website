import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

export default function Billing(){
     const navigate = useNavigate();

     const handleClick =() => {navigate('billing')};
        
     
    
    return(
        <div>
            <Sidebar/>
        <h1>Welcome to Billing</h1>
        <button onClick={()=>handleClick()}></button>
        </div>
    );
};