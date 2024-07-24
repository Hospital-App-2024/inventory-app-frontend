"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export type Inventory = {
  id: string;
  name: string;
};

export const columns: ColumnDef<Inventory>[] = [
  {
    accessorKey: "image",
    header: "Imagen",
    cell: ({ row }) => (
      <Image
        src={row.getValue("image")}
        alt="image"
        width={100}
        height={100}
        className="size-20 object-cover"
      />
    ),
  },
  {
    accessorKey: "product",
    header: "Producto",
  },
  {
    accessorKey: "amount",
    header: "Cantidad",
  },
  {
    accessorKey: "inventoryNumber",
    header: "Número de inventario",
  },
  {
    accessorKey: "actions",
    header: "Acciones",
    cell: () => (
      <div className="flex justify-center space-x-4">
        <Button variant="edit" size="icon" title="Editar" className="text-xl">
          <FaRegEdit />
        </Button>
      </div>
    ),
  },
];
