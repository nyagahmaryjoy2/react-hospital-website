import React from 'react'
import { BiMenu } from "react-icons/bi";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { GiPadlockOpen } from "react-icons/gi";
import { TbReportSearch } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Header from './Header';



export default function Sidebar(){
      
    const menus = [
        {name:"dashboard", link:'/dashboard',  icon: TbLayoutDashboardFilled },
        {name:"Billing", link:'/billing',  icon: BsCashCoin },
        {name:"PreAuth", link:'/pre-Auth',  icon: GiPadlockOpen },
        {name:"Reports", link:'/reports',  icon: TbReportSearch },
        {name:"Contacts", link:'/contacts',  icon: RiContactsLine },

    ];

    

  
    return(
        <div>
            <div className={'min-h-screen ${ open ? "w-72" : "w-16"} duration-500 text-gray-50 px-4'} style={{"backgroundImage" : "url('../src/assets/bg.jpg')"}}>
                    <div className='py-3 flex justify-end'>
                        <BiMenu size={26} className='cursor-pointer' />
                    </div>
                    <Header/>
                    <div className="mt-4 flex flex-col gap-4 relative">
                        
                        {   menus.map((menu, index) => (
                            <Link to={menu?.link} key= {index} className='flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-50 hover:text-black rounded-full'>
                                <div>{React.createElement(menu?.icon,{size: "20"})}</div>
                                    <h2> {menu?.name}</h2>
                            </Link>

                            ))}
                        
                    </div>
                    
                </div>
        </div>
    );
}