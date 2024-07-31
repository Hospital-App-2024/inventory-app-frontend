"use client";
import { ColumnDef } from "@tanstack/react-table";
import { IOwner } from "@/interfaces/owner.interface";

export const columns: ColumnDef<IOwner>[] = [
  {
    accessorKey: "name",
    header: "Propietario",
  },
  {
    accessorKey: "type",
    header: "Tipo",
  },
  {
    accessorKey: "Options",
    header: "Opciones",
  },
];
