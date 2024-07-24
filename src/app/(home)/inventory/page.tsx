import { columns, Inventory } from "@/components/Table/inventory/columns";
import { DataTable } from "@/components/Table/inventory/data-table";
import { HeaderTable } from "@/components/Table/inventory/HeaderTable";

async function getData(): Promise<Inventory[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      image: "https://via.placeholder.com/150",
      product: "Microondas somela",
      amount: 1,
      inventoryNumber: "2-004801",
      status: "activo",
    },
    {
      id: "2",
      image: "https://via.placeholder.com/150",
      product: "Dispenzador de agua",
      amount: 1,
      inventoryNumber: "2-004802",
      status: "inactivo",
    },
    {
      id: "3",
      image: "https://via.placeholder.com/150",
      product: "Televisor",
      amount: 1,
      inventoryNumber: "2-004803",
      status: "activo",
    },
  ];
}

export default async function InventoryPage() {
  const data = await getData();

  return (
    <div className="container py-5 mt-6 bg-white">
      <HeaderTable title="Inventario" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
