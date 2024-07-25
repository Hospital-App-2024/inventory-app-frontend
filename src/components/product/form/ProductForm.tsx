"use client";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { ProductFormSchema, ProductFormValue } from "@/schema/Product.schema";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { FormSelectResource } from "@/components/form/FormSelectResource";

const DEFAULT_VALUE = {
  file: undefined,
  name: "",
  resourceId: "",
  quantity: 0,
  status: undefined,
};

export const ProductForm = () => {
  const form = useForm<ProductFormValue>({
    resolver: zodResolver(ProductFormSchema),
    defaultValues: DEFAULT_VALUE,
  });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      form.setValue("file", acceptedFiles[0]);
    },
    [form]
  );

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
  });

  const onSubmit = (data: ProductFormValue) => {};

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

        <div className="grid grid-cols-2 gap-4">
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
            name="resourceId"
            render={({ field }) => (
              <FormSelectResource
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <div
                  {...getRootProps()}
                  className="border-2 border-dashed p-2 rounded-md h-52 w-full"
                >
                  <input {...getInputProps()} />
                  {acceptedFiles[0] ? (
                    <div className="h-full w-full overflow-hidden">
                      <Image
                        alt="product-image"
                        width={1000}
                        height={1000}
                        className="object-contain size-full"
                        src={URL.createObjectURL(acceptedFiles[0])}
                      />
                    </div>
                  ) : (
                    <p className="text-gray-400">Selecciona una imagen</p>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
