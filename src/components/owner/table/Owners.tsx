import { findAllOwner } from "@/action/owner/findAllOwner";
import { MainTable } from "@/components/Table/MainTable";
import { OwnerItemTable } from "./OwnerItemTable";
import { TablePagination } from "@/components/Table/TablePagination";

interface Props {
  page: number;
  limit: number;
}

const columns = [
  "Propietario",
  "Tipo"
]

export const Owners = async ({ limit, page }: Props) => {
  const data = await findAllOwner({ limit, page });

  return <>
        <MainTable columns={columns} totalPages={data.meta.totalPages}>
        {data.data?.map((owner) => (
          <OwnerItemTable key={owner.id} owner={owner} />
        ))}
      </MainTable>
      <TablePagination
        nextPage={data.meta.nextPage}
        prevPage={data.meta.prevPage}
        totalPages={data.meta.totalPages}
        pageSize={limit}
      />
  </>;
};
