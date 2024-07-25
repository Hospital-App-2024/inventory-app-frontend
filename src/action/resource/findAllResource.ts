"use server";
import { IResponseResource } from "@/interfaces/resource.interface";
import { URL_BACKEND } from "@/lib/envs";

export const findAllResource = async (): Promise<IResponseResource> => {
  const data = await fetch(`${URL_BACKEND}/resources`, {
    method: "GET",
    next: {
      tags: ["resource"],
    },
  });

  return await data.json();
};
