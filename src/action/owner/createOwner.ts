"use server";
import { IOwner } from "@/interfaces/owner.interface";
import { URL_BACKEND } from "@/lib/envs";
import type { OwnerFormValue } from "@/schema/owner.schema";
import { revalidateTag } from "next/cache";

interface IResponse {
  error?: string;
  body?: IOwner;
}

export const createOwner = async (
  values: OwnerFormValue
): Promise<IResponse> => {
  const resp = await fetch(`${URL_BACKEND}/owners`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      tags: ["owner"],
    },
  });

  if (!resp.ok) {
    return { error: "Ocurrió un error al crear el propietario" };
  }

  const owner = await resp.json();
  revalidateTag("owner");
  return { body: owner };
};
