import { SidebarMenu } from "./SidebarMenu";

export const Sidebar = () => {
  return (
    <aside className="shadow-lg w-14 bg-background transition-all fixed h-full z-50 hover:w-52 pt-2">
      <SidebarMenu />
    </aside>
  );
};
