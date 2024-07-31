"use client";
import { useState } from "react";
import { MainModal } from "@/components/modal/MainModal";
import { ProductForm } from "../form/ProductForm";
import { IProductWithOwner } from "@/interfaces/product.interface";

interface Props {
  label?: string;
  title: string;
  subtitle: string;
  product?: IProductWithOwner;
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

export const CreateProductModal = (props: Props) => {
  const { label, title, subtitle, icon, variant, product } = props;

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
      <ProductForm toggleModal={toggleModal} product={product} />
    </MainModal>
  );
};
