import { createOwner } from "@/action/owner/createOwner";
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
import { OwnerType } from "@/interfaces/owner.interface";
import { ownerFormSchema, OwnerFormValue } from "@/schema/owner.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface Props {
  toggleModal: () => void;
}

const DEFAULT_VALUE = {
  name: "",
  type: undefined,
};

export const OwnerForm = (props: Props) => {
  const { toggleModal } = props;

  const [isPending, startTransition] = useTransition();

  const form = useForm<OwnerFormValue>({
    resolver: zodResolver(ownerFormSchema),
    defaultValues: DEFAULT_VALUE,
  });

  const onSubmit = (data: OwnerFormValue) => {
    startTransition(async () => {
      const owner = await createOwner(data);

      if (owner.error) {
        toast.error(owner.error);
        return;
      }

      toast.success("Propietario creado correctamente");
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
                <Input {...field} />
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
              <FormLabel>Propietario</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione un Propietario" />
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

        <ButtonForm isDisabled={isPending} title="Crear" />
      </form>
    </Form>
  );
};
