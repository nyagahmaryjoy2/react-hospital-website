
import { MdOutlineLogout } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

interface Header {
  userName: string; // Name of the admin
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location || { userName: "Guest" };
  // const { userName } = location.state || { userName: "Guest" }

  const handleOnLogOut = () => {
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between p-4 bg-gray-100">
      <h1 className="m-3 text-x1 text-gray-500 bg-gray-100font font-semibold">
        HEALTH CARE CENTER{" "}
      </h1>
      <div
        className="flex items-center  top-2 right-2 px-4 py-4    text-gray-500
                        "
      >
        <span className="  text-lg font-medium  inset-0 flex justify-center items-center">
          {state?.username} || <MdOutlineLogout className="text-blue-800" />
        </span>
        <button
          onClick={handleOnLogOut}
          className=" font-semibold rounded bg-gray-100"
        >
          Logout{" "}
        </button>
      </div>
    </div>
  );
}
