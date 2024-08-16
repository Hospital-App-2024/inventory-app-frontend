import { CookieName, LoginResponse } from "@/interfaces/auth.interface";
import { cookies } from "next/headers";
import { NODE_ENV } from "@/lib/envs";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const options: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: NODE_ENV === "production",
  sameSite: "strict",
};

export function createSession(data: LoginResponse) {
  cookies().set(CookieName.SESSION, data.token, options);
  cookies().set(CookieName.USER, JSON.stringify(data.user), options);
}

export function deleteSession() {
  cookies().delete(CookieName.SESSION);
  cookies().delete(CookieName.USER);
}
