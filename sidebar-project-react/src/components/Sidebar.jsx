import React, { useState } from "react";
import logo from "../assets/logo.png";
import { ChevronFirst, ChevronLast, MoreVerticalIcon } from "lucide-react";
import profile from "../assets/profile.png";

export default function Sidebar({ children }) {
     const [expanded, setExpaned]= useState(true);
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img src={logo} alt="" className="w-32" />
            <button onClick={()=>setExpaned((curr)=>!curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
              {expanded?<ChevronFirst />:<ChevronLast/>}
            </button>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
          <div className="border-t flex p-3">
            <img src={profile} className="w-10 h-10 rounded-md" />
            <div className="flex justify-between items-center overflow-hidden w-52 ml-3">
              <div className="leading-4">
                <h4 className="font-semibold">constGenius</h4>
                <span className="text-xs text-gray-600">thedeveloprt@gmail.com</span>
              </div>
              <MoreVerticalIcon size={20}/>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}
export function SidebarItem({icon,text,active,alert}){
     return(
          <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800": "hover:bg-indigo-50 text-gray-600"}`}>
              {icon}
              <span className="w-52 ml-3">{text}</span>
              {alert && (
               <div className={`absolute right-2 w-2 h-2 rounded bg-indigi-400`}>

               </div>
              )} 
          </li>
     )
}
