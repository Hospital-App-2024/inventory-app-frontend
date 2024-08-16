"use client";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { Loading } from "@/components/auth/Loading";
import { refreshToken } from "@/action/auth/refreshToken";

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshToken().finally(() => setIsLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{}}>
      {isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
};
