import { Button } from "@/components/ui/button";
import { RiMenuFold4Fill } from "react-icons/ri";
import { RiMenuUnfold4Fill } from "react-icons/ri";

interface Props {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const SidebarHeader = ({ isOpen, toggleSidebar }: Props) => {
  return (
    <div className="grid grid-cols-3 items-center p-2">
      {isOpen && (
        <h2 className="text-xl font-bold col-span-2 text-end">InventoryApp</h2>
      )}
      <div className="text-end">
        <Button onClick={toggleSidebar} variant="outline" size="icon">
          {isOpen ? (
            <RiMenuUnfold4Fill className="w-6 h-6" />
          ) : (
            <RiMenuFold4Fill className="w-6 h-6" />
          )}
        </Button>
      </div>
    </div>
  );
};
