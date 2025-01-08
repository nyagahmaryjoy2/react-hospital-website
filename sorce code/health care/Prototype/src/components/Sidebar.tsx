import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { GiPadlockOpen } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { Link } from "react-router-dom";


export default function Sidebar() {
  const [open,setOpen]=useState(true);
  const menus = [
    { name: "Dashboard", link: "/dashboard", icon: TbLayoutDashboardFilled },
    { name: "Billing", link: "/billing", icon: BsCashCoin },
    { name: "PreAuth", link: "/pre-Auth", icon: GiPadlockOpen },
    { name: "Reports", link: "/reports", icon: TbReportSearch },
    { name: "Contacts", link: "/contacts", icon: RiContactsLine },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-50 px-4`}
        style={{ backgroundImage: "url('../src/assets/bg.jpg')" }}
      >
        {/* Menu Toggle */}
        <div className="py-3 flex justify-end">
          <BiMenu
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        {/* Links */}

        <div className="mt-4 flex flex-col gap-4 relative">
          <span
            className={`text-4x1 text-white font-bold text-center  mb-5 ${
              !open && "hidden"
            } origin-left duration-500`}
          >
            HEALTH CARE CENTER
          </span>
          {/* menu Items */}
          {menus.map((menu, index) => (
            <Link
              to={menu?.link}
              key={index}
              className="flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-50 hover:text-black rounded-full"
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <span
                className={`${!open && "hidden"} origin-left duration-500 `}
              >
                {" "}
                {menu?.name}
              </span>
              
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
{
  /**
  Tailwind Classes Used:
group: Groups hover behavior with child elements.
absolute: Positions the tooltip relative to the parent.
opacity-0 and opacity-100: Controls visibility.
transition-all and duration-300: Adds smooth transitions.
hover:bg-gray-50 and hover:text-black: Adds hover styles for the menu links.
 */
}