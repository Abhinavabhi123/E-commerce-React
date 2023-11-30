import Logo from "../../../assets/logo.svg";
import { MdAttachMoney } from "react-icons/md";
import { NavItem } from "../../../Types/type";
import NavCard from "../Cards/NavCard";

const navList:NavItem[] = [
  { Icon:MdAttachMoney, text: "Payment" },
  { Icon:MdAttachMoney, text: "hello" },
  { Icon:MdAttachMoney, text: "hello" },
  { Icon:MdAttachMoney, text: "hello" },
];

export default function NavBar() {
  return (
    <div className="w-screen md:h-16 bg-green-500 flex flex-col md:flex-row items-center md:justify-between px-10 h-40 py-5 gap-3">
      <div className="inline-flex items-center gap-2">
        <img src={Logo} alt="Logo" />
        <h1>Logo</h1>
      </div>
      <div className="flex items-center gap-1">
        {navList.map((item,i) => (
          <NavCard Icon={item.Icon} text={item.text}  key={i} />
        ))}
      </div>
    </div>
  );
}