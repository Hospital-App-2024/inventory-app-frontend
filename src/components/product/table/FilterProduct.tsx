"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductStatus } from "@/interfaces/product.interface";

export const FilterProduct = () => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const route = useRouter();

  const { replace } = useRouter();

  const handleSearch = (value: string) => {
    if (value === null) return null;
    if (value.length === 0) {
      const params = new URLSearchParams(searchParams);
      params.delete("search");
      replace(`${pathName}?${params.toString()}`);
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.set("search", value);
    replace(`${pathName}?${params.toString()}`);
  };

  const handleStatus = (value: string) => {
    if (value === null) return null;
    if (value === "ALL") {
      const params = new URLSearchParams(searchParams);
      console.log(params.get("productStatus"));
      params.delete("productStatus");
      replace(`${pathName}?${params.toString()}`);
      return;
    }

    const params = new URLSearchParams(searchParams);
    params.set("productStatus", value);
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <div className="flex py-2 gap-4">
      <Input
        className="w-3/12"
        placeholder="Buscar producto"
        value={searchParams.get("search") || ""}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <Select
        value={searchParams.get("productStatus") || "ALL"}
        name="productStatus"
        onValueChange={handleStatus}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Seleccione un estado" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="ALL">Todos</SelectItem>
            {Object.entries(ProductStatus).map(([key, value]) => (
              <SelectItem key={key} value={key}>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
