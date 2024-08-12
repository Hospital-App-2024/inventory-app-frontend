"use client";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  totalPages: number;
  nextPage: number | null;
  prevPage: number | null;
  pageSize: number;
}

export const TablePagination = (props: Props) => {
  const { totalPages, nextPage, prevPage, pageSize } = props;

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const navigate = useRouter();

  const cratePageUrl = (page: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (page === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (+page <= 0) {
      return `${pathname}`;
    }

    if (+page > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  const handleNextPage = () => {
    if (nextPage === null) return;
    navigate.push(cratePageUrl(nextPage));
  };

  const handlePrevPage = () => {
    if (prevPage === null) return;
    navigate.push(cratePageUrl(prevPage));
  };

  return (
    <div className="flex w-full bg-background flex-wrap-reverse md:flex-row py-2 gap-4">
      <div className="flex gap-2 w-full justify-center items-center">
        <p className="text-sm font-medium">Filas por página:</p>
        <Select
          value={pageSize.toString()}
          onValueChange={(value) => {
            const params = new URLSearchParams(searchParams);
            params.set("limit", value);
            navigate.push(`${pathname}?${params.toString()}`);
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={pageSize.toString()} />
          </SelectTrigger>
          <SelectContent side="top">
            {[5, 10, 20, 30, 40].map((size) => (
              <SelectItem key={size} value={`${size}`}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center w-full justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevPage}
          disabled={prevPage === null}
        >
          <IoChevronBackOutline size={20} />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={handleNextPage}
          disabled={nextPage === null}
        >
          <IoChevronForwardOutline size={20} />
        </Button>
      </div>
    </div>
  );
};
