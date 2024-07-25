import { MainModal } from "@/components/modal/MainModal";
import { ProductForm } from "@/components/product/form/ProductForm";

interface Props {
  title: string;
}

export const HeaderTable = ({ title }: Props) => {
  return (
    <div className="mb-2 flex justify-between">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <MainModal
        label="Agregar Producto"
        title="Agregar Producto"
        subtitle="Complete el formulario para agregar un nuevo producto"
      >
        <ProductForm />
      </MainModal>
    </div>
  );
};
