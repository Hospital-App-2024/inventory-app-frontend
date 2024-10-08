import { findAllProducts } from "@/action/product/findAll.action";
import { MainTable } from "@/components/Table/MainTable";
import { ProductItemTable } from "./ProductItemTable";
import { TablePagination } from "@/components/Table/TablePagination";

interface Props {
  page: number;
  limit: number;
  search?: string;
  productStatus?: string;
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

export const Products = async ({
  limit,
  page,
  search,
  productStatus,
}: Props) => {
  const data = await findAllProducts({
    page: page,
    limit: limit,
    search: search,
    productStatus: productStatus,
  });

  return (
    <>
      <MainTable columns={columns} totalPages={data.meta.totalPages}>
        {data.data?.map((product) => (
          <ProductItemTable key={product.id} product={product} />
        ))}
      </MainTable>
      <TablePagination
        nextPage={data.meta.nextPage}
        prevPage={data.meta.prevPage}
        totalPages={data.meta.totalPages}
        pageSize={limit}
      />
    </>
  );
};
