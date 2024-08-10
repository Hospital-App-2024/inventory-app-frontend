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
import { ProductStatus } from "@/interfaces/product.interface";

interface Props {
  value: string | undefined;
  name: string;
  onChange: (value: string) => void;
}

export const FormSelectProductStatus = (props: Props) => {
  const { value, onChange, name } = props;

  const handleChange = (value: string) => {
    if (!value) return;
    onChange(value);
  };

  return (
    <FormItem>
      <FormLabel>Estado</FormLabel>
      <Select value={value} name={name} onValueChange={handleChange}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Seleccione un estado" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {Object.entries(ProductStatus).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
};
