import { LuMousePointer2 } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";


const BillingFilters = () => {
 const [startActive, setStartActive] = useState(false);
  const [pendingActive, setPendingActive] = useState(false);
  const [activeActive, setActiveActive] = useState(false);
  const [historyActive, setHistoryDActive] = useState(false);

  const hideAllTabs = () => {
    setStartActive(false);
    setPendingActive(false);
    setActiveActive(false);
    setHistoryDActive(false);
  };

  const handleStartClick = () => {
    hideAllTabs();
    setStartActive(true);
  };

  const handlePendingClick = () => {
    hideAllTabs();
    setPendingActive(true);
  };

  const handleActiveClick = () => {
    hideAllTabs();
    setActiveActive(true);
  };
  const handleHistoryClick = () => {
    hideAllTabs();
    setHistoryDActive(true);
  };
  return (
    <div className="row  flex justify-evenly  ">
      <Link to="/StartVisit" onClick={handleStartClick}>
        <div
          className={`${
            startActive
              ? " flex items-center  top-2 right-2 px-4 py-4 text-blue-900 underline underline-offset-4 bg-white "
              : "flex items-center  top-2 right-2 px-4 py-4 text-blue-700"
          }`}
        >
          <LuMousePointer2 />
          Start visit
        </div>
      </Link>

      <Link to="/ActiveVisits" onClick={handleActiveClick}>
        <div
          className={`${
            activeActive
              ? " flex items-center  top-2 right-2 px-4 py-4 text-blue-900 underline underline-offset-4 bg-white "
              : "flex items-center  top-2 right-2 px-4 py-4 text-blue-700"
          }`}
        >
          <FaListCheck />
          Active visits
        </div>
      </Link>
      <Link to="/PendingVisits" onClick={handlePendingClick}>
        <div
          className={`${
            pendingActive
              ? " flex items-center  top-2 right-2 px-4 py-4 text-blue-900 underline underline-offset-4 bg-white "
              : "flex items-center  top-2 right-2 px-4 py-4 text-blue-700"
          }`}
        >
          <FaRegClock />
          pending visits
        </div>
      </Link>
      <Link to="/History" onClick={handleHistoryClick}>
        <div
          className={`${
            historyActive
              ? " flex items-center  top-2 right-2 px-4 py-4 text-blue-900 underline underline-offset-4 bg-white "
              : "flex items-center  top-2 right-2 px-4 py-4 text-blue-700"
          }`}
        >
          <HiOutlineDocumentSearch />
          History
        </div>
      </Link>
    </div>
  );
};
export default BillingFilters;
