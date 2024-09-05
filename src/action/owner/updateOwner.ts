"use server";
import { IOwner } from "@/interfaces/owner.interface";
import { URL_BACKEND } from "@/lib/envs";
import { OwnerFormValue } from "@/schema/owner.schema";
import { revalidateTag } from "next/cache";

interface Props {
  id: string;
  values: OwnerFormValue;
}

interface IResponse {
  error?: string;
  body?: IOwner;
}

export const updateOwner = async ({
  id,
  values,
}: Props): Promise<IResponse> => {
  const resp = await fetch(`${URL_BACKEND}/owners/${id}`, {
    method: "PATCH",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["owner"],
    },
  });

  if (!resp.ok) {
    return { error: "Ocurrió un error al actualizar el propietario" };
  }

  const owner = await resp.json();

  revalidateTag("owner");
  return { body: owner };
};
