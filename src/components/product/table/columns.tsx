"use client";
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  IProductWithResource,
  TStatusType,
} from "@/interfaces/product.interface";

const setBadgeVariant = (status: TStatusType) => {
  if (status === "Bueno") return "success";
  if (status === "Malo") return "info";
  if (status === "Dado de baja") return "destructive";
  if (status === "Traspasado") return "secondary";
};

export const columns: ColumnDef<IProductWithResource>[] = [
  {
    accessorKey: "image",
    header: "Imagen",
    cell: ({ row }) => (
      <Image
        src={row.getValue("image")}
        alt={row.getValue("name")}
        width={100}
        height={100}
        className="object-contain size-30"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Producto",
  },
  {
    accessorKey: "quantity",
    header: "Cantidad",
  },
  {
    accessorKey: "resourceName",
    header: "Recurso",
  },
  {
    accessorKey: "resourceType",
    header: "Tipo de recurso",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <Badge variant={setBadgeVariant(status)} className="text-base">
          {status}
        </Badge>
      );
    },
  },
  // {
  //   accessorKey: "inventoryNumber",
  //   header: "Número de inventario",
  // },
  // {
  //   accessorKey: "status",
  //   header: "Estado",
  //   cell: ({ row }) => {
  //     const status = row.original.status;
  //     return (
  //       <Badge
  //         variant={status === "activo" ? "success" : "destructive"}
  //         className="text-base"
  //       >
  //         {status}
  //       </Badge>
  //     );
  //   },
  // },
  // {
  //   accessorKey: "actions",
  //   header: "Acciones",
  //   cell: () => (
  //     <div className="flex justify-center space-x-4">
  //       <Button variant="edit" size="icon" title="Editar" className="text-xl">
  //         <FaRegEdit />
  //       </Button>
  //     </div>
  //   ),
  // },
];
