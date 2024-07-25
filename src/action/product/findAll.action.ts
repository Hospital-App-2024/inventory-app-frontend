"use server";
import { IResponseProducts } from "@/interfaces/product.interface";
import { URL_BACKEND } from "@/lib/envs";

interface IPagination {
  page: number;
  limit: number;
}

interface IPaginationAndSearch extends IPagination {
  search?: string;
}

export const findAllProducts = async (
  paginationAndSearch: IPaginationAndSearch
): Promise<IResponseProducts> => {
  const { limit, page, search } = paginationAndSearch;

  const data = await fetch(
    `${URL_BACKEND}/products?page=${page}&limit=${limit}`,
    {
      method: "GET",
      next: {
        tags: ["product"],
      },
      cache: "no-cache",
    }
  );

  return await data.json();
};
