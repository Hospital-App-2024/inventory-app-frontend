import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineInventory2 } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { FaMapMarkerAlt } from "react-icons/fa";

const className = "w-6 h-6";

export const menuItems = [
  {
    path: "/",
    title: "Dashboard",
    icon: <MdOutlineDashboard className={`text-indigo-600 ${className}`} />,
  },
  {
    path: "/inventory",
    title: "Inventario",
    icon: <MdOutlineInventory2 className={`text-indigo-600 ${className}`} />,
  },
  {
    path: "/workers",
    title: "Trabajadores",
    icon: <GrUserWorker className={`text-indigo-600 ${className}`} />,
  },
  {
    path: "/areas",
    title: "Áreas",
    icon: <FaMapMarkerAlt className={`text-indigo-600 ${className}`} />,
  },
];
