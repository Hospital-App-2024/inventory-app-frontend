import { IMeta } from "./meta.interface";

export interface IResponseOwner {
  data: IOwner[];
  meta: IMeta;
}

export interface IOwner {
  id: string;
  name: string;
  type: string;
}

export enum OwnerType {
  AREA = "Area",
  WORKER = "Trabajador",
}
