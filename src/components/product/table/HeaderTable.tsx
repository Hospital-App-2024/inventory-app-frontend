import { CreateItemForm } from "@/components/product/form/CreateItemForm";
import { MainModal } from "@/components/modal/MainModal";

interface Props {
  title: string;
}

export const HeaderTable = ({ title }: Props) => {
  return (
    <div className="mb-2 flex justify-between">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <MainModal
        label="Agregar Item"
        title="Agregar Item"
        subtitle="Complete el formulario para agregar un nuevo item"
      >
        <CreateItemForm />
      </MainModal>
    </div>
  );
};
