"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export type Inventory = {
  id: string;
  image: string;
  product: string;
  amount: number;
  inventoryNumber: string;
  status: "activo" | "inactivo";
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
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge
          variant={status === "activo" ? "success" : "destructive"}
          className="text-base"
        >
          {status}
        </Badge>
      );
    },
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
