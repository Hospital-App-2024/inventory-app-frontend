"use client";
import { useEffect, useState } from "react";
import { IResource } from "@/interfaces/resource.interface";
import { findAllResource } from "@/action/resource/findAllResource";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface Props {
  value: string | undefined;
  onChange: (value: string) => void;
}

export const FormSelectResource = ({ value, onChange }: Props) => {
  const [resources, setResources] = useState<IResource[]>([]);

  useEffect(() => {
    findAllResource().then((data) => setResources(data.data));
  }, []);

  return (
    <FormItem>
      <FormLabel>Propietario</FormLabel>
      <Select onValueChange={onChange} value={value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Seleccione un Propietario" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {resources.map((r) => (
            <SelectItem key={r.id} value={r.id}>
              {r.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
};
