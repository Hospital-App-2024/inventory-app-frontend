import { findAllProducts } from "@/action/product/findAll.action";
import { DataTable } from "@/components/table/data-table";
import { columns } from "./columns";

interface Props {
  page: number;
  limit: number;
}

export const Products = async ({ limit, page }: Props) => {
  const data = await findAllProducts({ page: page, limit: limit });

  return <DataTable columns={columns} data={data.data} meta={data.meta} />;
};
