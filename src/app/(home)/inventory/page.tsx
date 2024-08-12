import { FilterProduct } from "@/components/product/table/FilterProduct";
import { HeaderProductTable } from "@/components/product/table/HeaderProductTable";
import { Products } from "@/components/product/table/Products";

interface Props {
  searchParams: {
    limit?: string;
    page?: string;
    search?: string;
    productStatus?: string;
  };
}

export default function InventoryPage({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const limit = searchParams.limit ? parseInt(searchParams.limit) : 5;
  const search = searchParams.search ? searchParams.search : "";

  return (
    <div className="bg-white shadow h-full p-4 flex flex-col w-full">
      <HeaderProductTable />
      <FilterProduct />
      <Products
        limit={limit}
        page={page}
        search={search}
        productStatus={searchParams?.productStatus}
      />
    </div>
  );
}
