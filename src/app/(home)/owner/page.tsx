import { HeaderOwnerTable } from "@/components/owner/table/HeaderOwnerTable";
import { Owners } from "@/components/owner/table/Owners";

interface Props {
  searchParams: {
    limit?: string;
    page?: string;
  };
}

export default function OwnerPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const limit = searchParams.limit ? parseInt(searchParams.limit) : 5;

  return (
    <div className="container py-5 mt-6 bg-white shadow">
      <HeaderOwnerTable />
      <Owners limit={limit} page={page} />
    </div>
  );
}
