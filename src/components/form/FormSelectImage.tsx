import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BiImageAdd } from "react-icons/bi";
import { FieldPathValue, Noop, RefCallBack } from "react-hook-form";

interface Props {
  onChange: (...event: any[]) => void;
  value: FieldPathValue<any, any>;
  name: any;
  image?: string;
}

export const FormSelectImage = (props: Props) => {
  const { onChange, image, name, value } = props;

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles[0]);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
  });

  return (
    <FormItem>
      <FormLabel>Imagen</FormLabel>
      <FormControl>
        <div
          {...getRootProps()}
          className="border-2 border-dashed p-2 rounded-md h-52 w-full"
        >
          <Input name={name} {...getInputProps()} />
          {value || image ? (
            <div className="h-full w-full overflow-hidden">
              <Image
                alt="product-image"
                width={1000}
                height={1000}
                className="object-contain size-full"
                src={
                  value
                    ? URL.createObjectURL(value)
                    : image || "/images/no-image.jpg"
                }
              />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center flex-col">
              <p className="text-gray-400">Selecciona una imagen</p>
              <BiImageAdd className="text-gray-400 text-4xl" />
            </div>
          )}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
