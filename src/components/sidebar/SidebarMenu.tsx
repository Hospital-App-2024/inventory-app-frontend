"use client";
import { menuItems } from "@/constants/menuItems";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarMenu = () => {
  return (
    <nav className="px-2 space-y-2 mt-2 flex-1">
      {menuItems.map((item) => (
        <SidebarMenuItem
          key={item.path}
          path={item.path}
          title={item.title}
          icon={item.icon}
        />
      ))}
    </nav>
  );
};

interface SidebarMenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
}

const SidebarMenuItem = ({ icon, title, path }: SidebarMenuItemProps) => {
  const currentPath = usePathname();
  const isActive = currentPath === path;

  return (
    <Link
      href={path}
      className={cn(
        "flex items-center gap-3 hover:bg-primary p-1 rounded text-gray-400 hover:text-white font-semibold transition-all w-full whitespace-nowrap",
        {
          "bg-primary text-white": isActive,
        }
      )}
    >
      <span className="p-1 bg-gray-100 rounded">{icon}</span>
      <span>{title}</span>
    </Link>
  );
};
