import { CreateOwnerModal } from "@/components/owner/modal/CreateOwnerModal";

export const HeaderOwnerTable = () => {
  return (
    <div className="mb-2 flex justify-between">
      <h1 className="text-2xl font-bold text-gray-800">Propietarios</h1>
      <CreateOwnerModal
        label="Agregar Propietario"
        title="Agregar Propietario"
        subtitle="Complete el formulario para agregar un nuevo propietario"
      />
    </div>
  );
};
