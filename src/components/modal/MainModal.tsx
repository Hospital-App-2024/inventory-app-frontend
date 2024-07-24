import { RiMenuAddLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Props {
  children: React.ReactNode;
  title: string;
  label: string;
  subtitle: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "edit";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const MainModal = ({
  title,
  label,
  subtitle,
  children,
  icon,
  disabled,
  variant = "default",
  onOpenChange,
  open,
}: Props) => {
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          title={title}
          disabled={disabled}
          className="text-base"
        >
          {icon ? icon : <RiMenuAddLine size={20} />}
          <span className="ml-2">{label}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{subtitle}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
