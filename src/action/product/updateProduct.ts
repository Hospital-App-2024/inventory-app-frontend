"use server";
import { IProduct } from "@/interfaces/product.interface";
import { URL_BACKEND } from "@/lib/envs";
import { ProductFormValue } from "@/schema/Product.schema";
import { revalidateTag } from "next/cache";

interface Props {
  id: string;
  values: FormData;
}

interface IResponse {
  error?: string;
  body?: IProduct;
}

export const updateProduct = async ({
  id,
  values,
}: Props): Promise<IResponse> => {
  const resp = await fetch(`${URL_BACKEND}/products/${id}`, {
    method: "PATCH",
    body: values,
    next: {
      tags: ["product"],
    },
  });

  if (!resp.ok) {
    return { error: "Ocurrió un error al actualizar el producto" };
  }

  const product = await resp.json();

  revalidateTag("product");
  return { body: product };
};
