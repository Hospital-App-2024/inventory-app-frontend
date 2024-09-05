import { IMeta } from "./meta.interface";
import { IProduct } from "./product.interface";

export interface IResponseOwner {
  data: IOwner[];
  meta: IMeta;
}

export type TOwnerType = "AREA" | "WORKER";

export interface IOwner {
  id: string;
  name: string;
  type: TOwnerType;
  Product: Array<IProduct>;
  createdAt: Date;
  updatedAt: Date;
}

export enum OwnerType {
  AREA = "Area",
  WORKER = "Trabajador",
}
