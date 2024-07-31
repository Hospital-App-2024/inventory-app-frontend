"use server";
import { IProduct, IResponseProducts } from "@/interfaces/product.interface";
import { URL_BACKEND } from "@/lib/envs";

interface Props {
  id: string;
}

export const findProductById = async (props: Props): Promise<IProduct> => {
  const { id } = props;

  const data = await fetch(`${URL_BACKEND}/products/${id}`, {
    method: "GET",
    next: {
      tags: ["product"],
    },
    cache: "no-cache",
  });

  return await data.json();
};
