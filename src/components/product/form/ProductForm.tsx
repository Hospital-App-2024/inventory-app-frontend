"use client";
import React, { useCallback, useEffect, useTransition } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { ProductFormSchema, ProductFormValue } from "@/schema/Product.schema";
import { FormSelectOwner } from "@/components/form/FormSelectOwner";
import { ButtonForm } from "@/components/form/ButtonForm";
import { createProduct } from "@/action/product/createProduct";
import { toast } from "sonner";
import { IProductWithOwner } from "@/interfaces/product.interface";
import { updateProduct } from "../../../action/product/updateProduct";
import { FormSelectImage } from "@/components/form/FormSelectImage";
import { FormSelectProductStatus } from "@/components/form/FormSelectProductStatus";

interface Props {
  toggleModal: () => void;
  product?: IProductWithOwner;
}

const DEFAULT_VALUE = {
  file: undefined,
  name: "",
  ownerId: undefined,
  quantity: 0,
  status: undefined,
  inventoryNumber: "",
};

export const ProductForm = (props: Props) => {
  const { toggleModal, product } = props;

  const [isPending, startTransition] = useTransition();
  const [image, setImage] = React.useState<string | undefined>();

  const form = useForm<ProductFormValue>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: DEFAULT_VALUE,
  });

  useEffect(() => {
    if (product) {
      form.setValue("name", product.name);
      form.setValue("status", product.status);
      form.setValue("quantity", product.quantity);
      form.setValue("inventoryNumber", product.inventoryNumber);
      form.setValue("ownerId", product.ownerId);
      product.image && setImage(product.image);
    }
  }, [form, product]);

  const onSubmit = (data: ProductFormValue) => {
    startTransition(async () => {
      const form = new FormData();
      form.append("name", data.name);
      form.append("ownerId", data.ownerId);
      form.append("quantity", data.quantity.toString());
      form.append("status", data.status);
      form.append("inventoryNumber", data.inventoryNumber);

      if (data.file) {
        form.append("file", data.file as File);
      }

      let item;

      if (product) {
        item = await updateProduct({ id: product.id, values: form });
      } else {
        item = await createProduct(form);
      }

      if (item.error) {
        toast.error(item.error);
        return;
      }

      const message = product ? "Producto actualizado" : "Producto creado";

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
              <FormLabel>Producto</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="inventoryNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de inventario</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormSelectProductStatus
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Cantidad</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ownerId"
            render={({ field }) => (
              <FormSelectOwner value={field.value} onChange={field.onChange} />
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormSelectImage
              onChange={field.onChange}
              value={field.value}
              name={field.name}
              image={image}
            />
          )}
        />

        <ButtonForm
          isDisabled={isPending}
          title={product ? "Editar" : "Crear"}
          type="submit"
        />
      </form>
    </Form>
  );
};
