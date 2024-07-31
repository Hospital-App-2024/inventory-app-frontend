import { findAllProducts } from "@/action/product/findAll.action";
import { MainTable } from "@/components/Table/MainTable";
import { ProductItemTable } from "./ProductItemTable";

interface Props {
  page: number;
  limit: number;
}

const columns = [
  "Imagen",
  "Producto",
  "Numero de Inventario",
  "Cantidad",
  "Propietario",
  "Estado",
  "Acciones",
];

export const Products = async ({ limit, page }: Props) => {
  const data = await findAllProducts({ page: page, limit: limit });

  return (
    <MainTable columns={columns} totalPages={data.meta.totalPages}>
      {data.data.map((product) => (
        <ProductItemTable key={product.id} product={product} />
      ))}
    </MainTable>
  );
};
