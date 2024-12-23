import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
     const navigate = useNavigate();

     const handleClick =() => {navigate('contacts')};
        
     
    
    return(
        <div>
            <Sidebar/>
        <h1>Welcome to contacts</h1>
        <button onClick={()=>handleClick()}></button>
        </div>
    );
};