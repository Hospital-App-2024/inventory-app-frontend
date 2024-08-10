"use server";
import { IResponseProducts } from "@/interfaces/product.interface";
import { URL_BACKEND } from "@/lib/envs";

interface IPagination {
  page: number;
  limit: number;
}

interface IPaginationAndSearch extends IPagination {
  search?: string;
  productStatus?: string;
}

export const findAllProducts = async (
  paginationAndSearch: IPaginationAndSearch
): Promise<IResponseProducts> => {
  const { limit, page, search, productStatus } = paginationAndSearch;

  const data = await fetch(
    `${URL_BACKEND}/products?page=${page}&limit=${limit}&search=${search}`,
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
