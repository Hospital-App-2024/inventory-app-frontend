import { findAllOwner } from "@/action/owner/findAllOwner";
import { DataTable } from "@/components/Table/data-table";
import { columns } from "./columns";

interface Props {
  page: number;
  limit: number;
}

export const Owners = async ({ limit, page }: Props) => {
  const data = await findAllOwner({ limit, page });

  return <DataTable columns={columns} data={data.data} meta={data.meta} />;
};
