"use client";
import { useEffect, useState } from "react";

import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { findAllOwner } from "@/action/owner/findAllOwner";
import type { IOwner } from "@/interfaces/owner.interface";

interface Props {
  value: string | undefined;
  onChange: (value: string) => void;
}

export const FormSelectOwner = (props: Props) => {
  const { value, onChange } = props;

  const [owners, setOwners] = useState<IOwner[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    findAllOwner()
      .then((data) => setOwners(data.data))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <FormItem>
      <FormLabel>Propietario</FormLabel>
      {isLoading ? (
        <Skeleton className="h-10" />
      ) : (
        <Select onValueChange={onChange} value={value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione propietario" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {owners.map((o) => (
              <SelectItem key={o.id} value={o.id}>
                {o.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      <FormMessage />
    </FormItem>
  );
};
