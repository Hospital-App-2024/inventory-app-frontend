import { Separator } from "../ui/separator";
import { LogoutButton } from "./LogoutButton";
import { SidebarMenu } from "./SidebarMenu";

export const Sidebar = () => {
  return (
    <aside className="shadow-lg w-14 bg-background transition-all fixed h-full z-50 hover:w-60 pt-2 flex flex-col overflow-hidden group">
      <div className="p-2 h-14">
        <h2 className="text-xl font-bold text-primary transition-all text-center">
          <span className="hidden group-hover:block">InventoryApp</span>
        </h2>
      </div>
      <Separator />
      <SidebarMenu />
      <LogoutButton />
    </aside>
  );
};
