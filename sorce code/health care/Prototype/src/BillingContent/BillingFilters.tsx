import { LuMousePointer2 } from "react-icons/lu";
import { FaListCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

const BillingFilters = () => {
  return (
    <div className="row  flex justify-evenly  ">
      <Link to="/StartVisit">
        <div className="flex items-center  top-2 right-2 px-4 py-4 text-blue-700">
          <LuMousePointer2 />
          Start visit
        </div>
      </Link>

      <Link to={"<ActiveVisits/>"}>
        <div className="flex items-center  top-2 right-2 px-4 py-4 text-blue-700">
          <FaListCheck />
          Active visits
        </div>
      </Link>
      <Link to={"<PendingVisits/>"}>
        <div className="flex items-center  top-2 right-2 px-4 py-4 text-blue-700 ">
          <FaRegClock />
          pending visits
        </div>
      </Link>
      <Link to={"<History/>"}>
        <div className="flex items-center  top-2 right-2 px-4 py-4 text-blue-700">
          <HiOutlineDocumentSearch />
          History
        </div>
      </Link>
    </div>
  );
};
export default BillingFilters;
