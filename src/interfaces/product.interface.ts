import { IMeta } from "./meta.interface";

export interface IResponseProducts {
  data: IProductWithOwner[];
  meta: IMeta;
}

export interface IProductWithOwner extends IProduct {
  ownerName: string;
  ownerType: string;
}

export type TStatus = "GOOD" | "BAD" | "DISCONTINUED" | "TRANSFERRED";

export interface IProduct {
  createdAt: string;
  id: string;
  image: string | null;
  inventoryNumber: string;
  name: string;
  ownerId: string;
  quantity: number;
  status: TStatus;
  updatedAt: string;
}

export enum ProductStatus {
  "GOOD" = "Bueno",
  "BAD" = "Malo",
  "DISCONTINUED" = "Dado de baja",
  "TRANSFERRED" = "Transferido",
}
