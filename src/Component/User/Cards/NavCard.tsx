import React from "react";
import { NavItem } from "../../../Types/type";

export default function NavCard({Icon,text}:NavItem) {
  return (
    <div className="group  flex flex-wrap items-center gap-1">
      <div className="w-10 h-10 bg-white rounded-md flex justify-center items-center drop-shadow-md">
       <Icon/>
      </div>
      <p className="text-xs">{text}</p>
    </div>
  );
}
