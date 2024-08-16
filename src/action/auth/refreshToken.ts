"use server";
import { cookies } from "next/headers";
import { CookieName, LoginResponse } from "@/interfaces/auth.interface";
import { URL_BACKEND } from "@/lib/envs";
import { createSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

export const refreshToken = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get(CookieName.SESSION);

  const response = await fetch(`${URL_BACKEND}/auth/check-status`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token?.value}`,
    },
    cache: "no-cache",
  });

  console.log(token?.value);

  if (!response.ok) {
    deleteSession();
    return { error: "Sesión expirada" };
  }

  const data: LoginResponse = await response.json();

  if (!data.user.isActive) {
    deleteSession();
    return { error: "El usuario no está activo" };
  }

  await createSession(data);
  redirect("/");
};
