import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Billing from "./BillingContent/Billing";
import Reports from "./Reports";
import StartVisit from "./BillingContent/StartVisit";
import ActiveVisits from "../src/BillingContent/ActiveVisits";
import PendingVisits from "./BillingContent/PendingVisits";
import History from "./BillingContent/History";
import Contacts from "./Contacts/Contacts";
import PreAuth from "./PreAuth";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="billing" element={<Billing />} />
          <Route path="pre-Auth" element={<PreAuth/>} />
          <Route path="reports" element={<Reports />} />
          <Route path="contacts" element={<Contacts />} />
          {/**billing routes */}
          <Route path="/StartVisit" element={<StartVisit />} />
          <Route path="/ActiveVisits" element={<ActiveVisits />} />
          <Route path="/PendingVisits" element={<PendingVisits />} />
          <Route path="/History" element={<History />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

/**
 * import{Route,Routes} from 'react-router-dom';
import './App.css'
import Login from './Login';
import Home from './home'

function App() {
  
  return (
    <>
   <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage" : "url('../src/assets/bg.jpg')"}} >
     <Routes>
      <Route path="login" element={<Login />} />
     </Routes>
   </div>
   </>
  );
};

export default App;







import './App.css'
import Home from './home'

function App() {
  
  return (
    <>
   <Home/>
   </>
  );
};

export default App;


 */
