"use server";
import { LoginResponse } from "@/interfaces/auth.interface";
import { URL_BACKEND } from "@/lib/envs";
import { createSession, deleteSession, getSession } from "@/lib/session";

export const refreshToken = async () => {
  const session = getSession();

  if (!session) {
    return;
  }

  const response = await fetch(`${URL_BACKEND}/auth/check-status`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.token}`,
    },
    cache: "no-cache",
  });

  if (!response.ok) {
    deleteSession();
    return;
  }

  const data: LoginResponse = await response.json();

  if (!data.user.isActive) {
    return { error: "El usuario no está activo" };
  }

  createSession(data);
};
