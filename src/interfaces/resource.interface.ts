import { IMeta } from "./meta.interface";

export interface IResponseResource {
  data: IResource[];
  meta: IMeta;
}

export interface IResource {
  id: string;
  name: string;
  type: string;
}
