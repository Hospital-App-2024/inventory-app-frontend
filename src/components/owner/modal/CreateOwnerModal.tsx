"use client";
import { useState } from "react";
import { MainModal } from "@/components/modal/MainModal";
import { OwnerForm } from "../form/OwnerForm";
import { IOwner } from "@/interfaces/owner.interface";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  owner?: IOwner
  icon?: React.ReactNode;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "edit";
}

export const CreateOwnerModal = ( props : Props) => {

  const { subtitle, title, icon, label, owner, variant } = props;


  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainModal
      label={label}
      title={title}
      subtitle={subtitle}
      open={isOpen}
      onOpenChange={toggleModal}
      icon={icon}
      variant={variant}
    >
      <OwnerForm toggleModal={toggleModal} owner={owner} />
    </MainModal>
  );
};
