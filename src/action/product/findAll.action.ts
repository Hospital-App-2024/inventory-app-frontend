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

  let url = `${URL_BACKEND}/products?limit=${limit}&page=${page}`;

  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (productStatus) params.append("productStatus", productStatus);

  url += `&${params}`;

  const data = await fetch(url, {
    method: "GET",
    next: {
      tags: ["product"],
    },
    cache: "no-cache",
  });

  return await data.json();
};
