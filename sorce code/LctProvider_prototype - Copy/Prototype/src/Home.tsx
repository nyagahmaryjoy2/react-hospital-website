import Sidebar from './Sidebar';
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate, useLocation} from 'react-router-dom';
 
                
    
 interface Home {
        userName: string; // Name of the admin
          };

const Home: React.FC<Home> = () =>{ 
    const navigate = useNavigate();
    const location = useLocation();
    // const { userName } = location.state?.username || { userName: "Guest" }
      const { userName } = location.state || { userName: "Guest" }

   const handleOnLogOut = () => {
      
       navigate("/login");
     
   }


     return (
        <>
        <section className='flex gap-6'>
            <Sidebar/>
            <div className="container" >
                <div className='flex items-center justify-between p-4'>
                    <h1 className='m-3 text-x1 text-black font font-semibold'>HEALTH CARE CENTER </h1>
                    <div className='flex items-center  top-2 right-2 px-4 py-4    text-blue-800
                        '>
                         <span 
                      className="  text-lg font-medium  inset-0 flex justify-center items-center">  
                       {userName} || <MdOutlineLogout  /> 
                      
                      
                      </span>
                      <button
                        onClick={handleOnLogOut}
                        className=" font-semibold rounded bg-white"
                      > 
                       Logout </button>
                </div>
                </div>
                </div>
        </section>
        
        </>
     );
       
    
};
export default Home;
 