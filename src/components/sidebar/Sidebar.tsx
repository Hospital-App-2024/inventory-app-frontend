"use client";
import { cn } from "@/lib/utils";
import { useToggleSidebar } from "@/app/hooks";
import { SidebarHeader } from "./SidebarHeader";
import { Separator } from "@/components/ui/separator";
import { SidebarMenu } from "./SidebarMenu";

export const Sidebar = () => {
  const { isOpen, toggleSidebar } = useToggleSidebar();

  return (
    <aside
      className={cn(
        "shadow-lg w-14 bg-background transition-all",
        isOpen && "w-60"
      )}
    >
      <SidebarHeader isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Separator />
      <SidebarMenu />
    </aside>
  );
};
