import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";

const className = "w-6 h-6 text-primary";

export const menuItems = [
  {
    path: "/",
    title: "Dashboard",
    icon: <MdOutlineDashboard className={className} />,
  },
  {
    path: "/inventory",
    title: "Inventario",
    icon: <MdOutlineInventory2 className={className} />,
  },
  {
    path: "/owner",
    title: "Propietarios",
    icon: <GrUserWorker className={className} />,
  },
];
