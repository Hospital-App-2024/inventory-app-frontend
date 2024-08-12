import { CreateProductModal } from "../modal/CreateProductModal";

export const HeaderProductTable = () => {
  return (
    <div className="mb-2 flex justify-between flex-col gap-2 md:flex-row">
      <h1 className="text-2xl font-bold text-gray-800">Productos</h1>
      <CreateProductModal
        label="Crear producto"
        title="Crear producto"
        subtitle="Llena los campos para crear un producto"
      />
    </div>
  );
};
