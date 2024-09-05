"use client";
import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import { refreshToken } from "@/action/auth/refreshToken";
import { LoadingSkeleton } from "@/components/auth/LoadingSkeleton";

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    refreshToken().finally(() => setIsLoading(false));
    setIsLoading(false)
  }, []);

  return (
    <AuthContext.Provider value={{}}>
      {isLoading ? <LoadingSkeleton /> : children}
    </AuthContext.Provider>
  );
};
