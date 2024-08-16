"use server";
import { LoginResponse } from "@/interfaces/auth.interface";
import { URL_BACKEND } from "@/lib/envs";
import { LoginFormValue } from "@/schema/auth.schema";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";

export const login = async (values: LoginFormValue) => {
  const response = await fetch(`${URL_BACKEND}/auth/signin`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    cache: "no-cache",
  });

  if (!response.ok) {
    deleteSession();
    return { error: "Credenciales inválidas" };
  }

  const data: LoginResponse = await response.json();

  if (!data.user.isActive) {
    deleteSession();
    return { error: "El usuario no está activo" };
  }

  createSession(data);
  redirect("/");
};
