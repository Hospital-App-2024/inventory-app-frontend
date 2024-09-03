import { IMeta } from "./meta.interface";

export interface IResponseOwner {
  data: IOwner[];
  meta: IMeta;
}

export type TOwnerType = "AREA" | "WORKER";

export interface IOwner {
  id: string;
  name: string;
  type: TOwnerType;
}

export enum OwnerType {
  "AREA" = "Area",
  "WORKER" = "Trabajador",
}
