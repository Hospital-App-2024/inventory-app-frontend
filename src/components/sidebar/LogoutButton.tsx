"use client";
import { logout } from "@/action/auth/logout";
import { LuLogOut } from "react-icons/lu";

export const LogoutButton = () => {
  return (
    <div className="px-2 py-2">
      <button
        onClick={() => logout()}
        className="flex items-center gap-3 p-2 rounded text-red-500 bg-red-500/10 font-semibold transition-all w-full whitespace-nowrap hover:bg-red-500/20"
      >
        <span className="rounded">
          <LuLogOut className="w-6 h-6" />
        </span>
        <span className="hidden group-hover:block">Cerrar sesión</span>
      </button>
    </div>
  );
};
