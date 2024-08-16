import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  IProductWithOwner,
  ProductStatus,
  TStatus,
} from "@/interfaces/product.interface";
import Image from "next/image";
import { CreateProductModal } from "../modal/CreateProductModal";

import { BiSolidEdit } from "react-icons/bi";

interface Props {
  product: IProductWithOwner;
}

const setBadgeVariant = (status: TStatus) => {
  if (status === "GOOD") return "success";
  if (status === "BAD") return "info";
  if (status === "DISCONTINUED") return "destructive";
  if (status === "TRANSFERRED") return "secondary";
};

export const ProductItemTable = ({ product }: Props) => {
  const { image, name, ownerName, quantity, status, inventoryNumber } = product;

  return (
    <TableRow>
      <TableCell>
        <Image
          src={image || "/images/no-image.jpg"}
          alt={name}
          width={100}
          height={100}
          className="object-contain size-30"
        />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{inventoryNumber}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>{ownerName}</TableCell>
      <TableCell>
        <Badge variant={setBadgeVariant(status)}>{ProductStatus[status]}</Badge>
      </TableCell>
      <TableCell>
        <CreateProductModal
          title="Editar producto"
          subtitle="Editar producto"
          product={product}
          icon={<BiSolidEdit size={20} />}
          variant="outline"
        />
      </TableCell>
    </TableRow>
  );
};
