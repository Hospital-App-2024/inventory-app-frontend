import { createOwner } from "@/action/owner/createOwner";
import { updateOwner } from "@/action/owner/updateOwner";
import { ButtonForm } from "@/components/form/ButtonForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IOwner, OwnerType } from "@/interfaces/owner.interface";
import { ownerFormSchema, OwnerFormValue } from "@/schema/owner.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  toggleModal: () => void;
  owner?: IOwner
}

const DEFAULT_VALUE = {
  name: "",
  type: undefined,
};

export const OwnerForm = (props: Props) => {
  const { toggleModal, owner } = props;

  const [isPending, startTransition] = useTransition();

  const form = useForm<OwnerFormValue>({
    resolver: zodResolver(ownerFormSchema),
    defaultValues: owner ? {
      name: owner.name,
      type: owner.type
    } : DEFAULT_VALUE,
  });

  const onSubmit = (data: OwnerFormValue) => {
    startTransition(async () => {
      
      let action = null;

      if (owner) {
        action = await updateOwner({
          id: owner.id, 
          values: data
        });
      } else {
        action = await createOwner(data);
      }

      if (action.error) {
        toast.error(action.error);
        return;
      };

      const message = owner ? "Propietario Actualizado" : "Propietario creado correctamente"

      toast.success(message);
      toggleModal();
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo</FormLabel>
              <Select value={field.value} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un Tipo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(OwnerType).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <ButtonForm isDisabled={isPending} title={ owner ? "Editar" : "Crear"} />
      </form>
    </Form>
  );
};
