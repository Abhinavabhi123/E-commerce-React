import { IoMdMenu } from "react-icons/io";
import ProductSearch from "../Search/ProductSearch";
import { NavItem } from "../../../Types/type";
import { FaRegHeart,FaRegUser } from "react-icons/fa6";

const items:NavItem[]=[
  {Icon:FaRegHeart},
  {Icon:FaRegUser}
]

export default function MainSection() {
  return (
    <div className="w-screen h-24 bg-primary flex justify-center items-center">
      <div className="w-[90%]  h-[90%] flex items-center">
        <div className="w-32 h-[50%] bg-secondary rounded-md flex justify-center items-center gap-2 cursor-pointer">
          <IoMdMenu />
          <p className="text-[15px] select-none">Category</p>
        </div>
        <div  className="w-[80%] h-[50%] ">
            <ProductSearch/>
        </div>
        <div className="flex gap-10 items-center justify-evenly ">
           {
            items.map((item,i)=>(
              <div key={i} className="w-14 h-14 rounded-md bg-slate-600 flex justify-center items-center hover:text-violet-500">
                <item.Icon/>
              </div>
            ))
           }
        </div>
      </div>
    </div>
  );
}
