import { CookieName, LoginResponse, User } from "@/interfaces/auth.interface";
import { cookies } from "next/headers";
import { NODE_ENV } from "@/lib/envs";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { decryptCookie, encryptCookie } from "./utils";

const options: Partial<ResponseCookie> = {
  httpOnly: true,
  secure: NODE_ENV === "production",
  sameSite: "strict",
};

export function createSession(data: LoginResponse) {
  cookies().set(CookieName.SESSION, encryptCookie(data.token), options);
  cookies().set(CookieName.USER, encryptCookie(JSON.stringify(data.user)), options);
}

export function getSession(): { token: string, user: User } {
  const token = cookies().get(CookieName.SESSION);
  const user = cookies().get(CookieName.USER);

  return {
    token: decryptCookie(token?.value),
    user: JSON.parse(decryptCookie(user?.value)),
  }
}

export function deleteSession() {
  cookies().delete(CookieName.SESSION);
  cookies().delete(CookieName.USER);
}
