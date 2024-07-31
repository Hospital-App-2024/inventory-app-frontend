"use server";
import { type IResponseOwner } from "@/interfaces/owner.interface";
import { URL_BACKEND } from "@/lib/envs";

interface Props {
  limit?: number;
  page?: number;
  search?: string;
}

export const findAllOwner = async (
  props: Props = {}
): Promise<IResponseOwner> => {
  const { limit, page, search } = props;

  let url = `${URL_BACKEND}/owners`;

  if (limit) {
    url += `?limit=${limit}`;
  }

  if (page) {
    url += `&page=${page}`;
  }

  if (search) {
    url += `&search=${search}`;
  }

  const data = await fetch(url, {
    method: "GET",
    next: {
      tags: ["owner"],
    },
  });

  return await data.json();
};
