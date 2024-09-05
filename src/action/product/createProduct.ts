"use server";
import { IProduct } from "@/interfaces/product.interface";
import { URL_BACKEND } from "@/lib/envs";
import { ProductFormValue } from "@/schema/Product.schema";
import { revalidateTag } from "next/cache";

interface IResponse {
  error?: string;
  body?: IProduct;
}

export const createProduct = async (values: FormData): Promise<IResponse> => {
  const resp = await fetch(`${URL_BACKEND}/products`, {
    method: "POST",
    body: values,
    next: {
      tags: ["product"],
    },
  });

  const product = await resp.json();

  if (!resp.ok) {
    return { error: product?.message ||  "Error al crear el producto"};
  }


  revalidateTag("product");
  return { body: product };
};
