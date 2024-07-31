"use client";
import { useState } from "react";
import { MainModal } from "@/components/modal/MainModal";
import { OwnerForm } from "../form/OwnerForm";

export const CreateOwnerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MainModal
      label="Agregar Propietario"
      title="Agregar Propietario"
      subtitle="Complete el formulario para agregar un nuevo propietario"
      open={isOpen}
      onOpenChange={toggleModal}
    >
      <OwnerForm toggleModal={toggleModal} />
    </MainModal>
  );
};
