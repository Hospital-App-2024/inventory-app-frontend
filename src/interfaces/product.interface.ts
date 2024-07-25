import { IMeta } from "./meta.interface";

export interface IResponseProducts {
  data: IProductWithResource[];
  meta: IMeta;
}

export type TStatusType = "Bueno" | "Malo" | "Dado de baja" | "Traspasado";

export interface IProductWithResource {
  id: string;
  image: string;
  name: string;
  quantity: number;
  resourceId: string;
  resourceName: string;
  resourceType: string;
  status: TStatusType;
}

export enum ProductStatus {
  GOOD = "Bueno",
  BAD = "Malo",
  DISCONTINUED = "Dada de baja",
  TRANSFERRED = "Transferido",
}
