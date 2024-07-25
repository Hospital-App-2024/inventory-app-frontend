import { Products } from "@/components/product/table/Products";
import { HeaderTable } from "@/components/table/area/HeaderTable";

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
      <HeaderTable title="Inventario" />
      <Products limit={limit} page={page} />
    </div>
  );
}
