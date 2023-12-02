import {useState} from "react";
import { IoMdMenu } from "react-icons/io";
import ProductSearch from "../Search/ProductSearch";
import { NavItem } from "../../../Types/type";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";

const items: NavItem[]  = [{ Icon: FaRegHeart }, { Icon: FaRegUser }];

export default function MainSection() {

  const [open,setOpen] = useState<boolean>(false)
  function openList() {
    setOpen(prev=>!prev)
  }

  return (
    <div className="w-screen h-24 bg-primary flex justify-center items-center">
      <div className="w-[90%]  h-[90%] flex items-center justify-between relative">
        <div
          className="relative md:w-32 md:h-[50%] h-[30px] text-xs w-[50px] md:text-base bg-secondary rounded-md flex justify-center items-center gap-2 cursor-pointer"
          onClick={openList}
        >
          <IoMdMenu />
          <p className="text-[15px] hidden max-[907px]:text-xs min-[907px]:block select-none">
            Category
          </p>
        </div>
        <div className={`h-[15rem] absolute transition-all duration-700  mt-72 z-10 w-44 rounded-md bg-white bg-opacity-40 ${open?"block":"hidden"} flex justify-center items-center`}>
          <ul className="w-[90%] h-[90%] bg-white rounded-md border border-gray-500 flex flex-col items-center">
            <li className="p-1 hover:bg-gray-300 rounded-t-md cursor-pointer w-full text-center font-serif">hello1</li>
            <li className="p-1 hover:bg-gray-300 cursor-pointer w-full text-center font-serif">hello2</li>
            <li className="p-1 hover:bg-gray-300 cursor-pointer w-full text-center font-serif">hello3</li>
            <li className="p-1 hover:bg-gray-300 cursor-pointer w-full text-center font-serif">hello4</li>
          </ul>
        </div>
        <div className="w-[100%]  h-[30px] md:h-[50%]">
          <ProductSearch />
        </div>
        <div className="flex md:gap-10 gap-4  items-center max-[1002px]:justify-evenly ms-5 md:ms-0">
          {items.map((item, i) => (
            <div
              key={i}
              className="md:w-14 w-8 md:h-14 text-white h-8 rounded-md bg-slate-600 flex justify-center items-center hover:text-violet-500"
            >
              <item.Icon  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
