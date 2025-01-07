import { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";


const Login = ()=>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault(); // Handle login logic here

   if (!username.trim() || !password.trim()) {
    alert("Please fill out both username and password fields.");
    return; // Stop further execution if fields are empty
  }

   console.log('Username:', username);
   console.log('Password:', password);
   
   navigate("/home", { state:{ username : "User Name"}})
  };
   
 
    return (
      <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage" : "url('../src/assets/bg.jpg')"}}>

      <div className="bg-slate-800 border-slate-400 rounded-md p-9 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-35">
        <Header />
        <h1 className="text-4x1 text-white font-bold text-center  mb-0">Sign into your Account</h1>
        <form action="">
          <div className="relative my-4">
              <label className="absolute text-sn text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-18 origin-[0] peer-focus:left-0  peer-focus:text-blue-688 peer-focus:dark:text-blue-500 peer-placeholder-shown:100 peer-placeholder-shown:translate-y-8 peer-focus:scale-75 peer- focus:scale-75 peer-focus:translate-y-6" >Username</label>
              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className="block w-72 py-2.3 px-0 text-sn text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" required/>
          </div>
          <div className="relative my-4">
              <label className="absolute text-sn text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-18 origin-[0] peer-focus:left-0  peer-focus:text-blue-688 peer-focus:dark:text-blue-500 peer-placeholder-shown:100 peer-placeholder-shown:translate-y-8 peer-focus:scale-75 peer- focus:scale-75 peer-focus:translate-y-6" >Password</label>
             <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="block w-72 py-2.3 px-0 text-sn text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" required />
          </div>
          <button  onClick={(e)=> handleSubmit(e)} className="w-full mb-0 text-[15px] mt-6 rounded-full bg-gray-300 text-black hover:bg-green-600 hover:text-white py-1 transition-colors duration-300" > Sign In </button>
    
          </form>
          </div>
        </div>
    );
};
export default Login;
