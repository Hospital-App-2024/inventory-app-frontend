import { HeaderProductTable } from "@/components/product/table/HeaderProductTable";
import { Products } from "@/components/product/table/Products";

interface Props {
  searchParams: {
    limit?: string;
    page?: string;
  };
}

export default function InventoryPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const limit = searchParams.limit ? parseInt(searchParams.limit) : 5;

  return (
    <div className="container py-5 mt-6 bg-white shadow">
      <HeaderProductTable />
      <Products limit={limit} page={page} />
    </div>
  );
}
