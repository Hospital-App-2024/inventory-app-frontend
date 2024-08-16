"use server";
import { deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const logout = async () => {
  await deleteSession();
  redirect("/auth/login");
};
