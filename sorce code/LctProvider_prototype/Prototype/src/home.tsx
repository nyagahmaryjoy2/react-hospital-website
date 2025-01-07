import Sidebar from './Sidebar';
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate, useLocation} from 'react-router-dom';
 
                
    
 interface Home {
        userName: string; // Name of the admin
          };

const Home: React.FC<Home> = () =>{ 
    const navigate =useNavigate();
    const location = useLocation();
    const { userName } = location.state || { userName: "Guest" }

   const handleOnLogOut = () => {
      
       navigate("/login");
     
   }


     return (
        <>
        <section className='flex gap-6'>
            <Sidebar/>
            <div className="container" >
                 
                    <h1 className='m-3 text-x1 text-black font font-semibold'>HEALTH CARE CENTER </h1>
                    <div >
                      <button
                        onClick={handleOnLogOut}
                        className="absolute top-2 right-2 px-4 py-2 bg-transparent   text-blue-800 font-semibold rounded
                        "
                      > 
                      <span 
                      className=" relative text-lg font-medium  inset-0 flex justify-center items-center">  
                      Welcome || 
                      <MdOutlineLogout  />
                      {userName}
                      </span>  
                      Logout 
        
                         </button>
                </div>
                </div>
        </section>
        
        </>
     );
       
    
};
export default Home;
 