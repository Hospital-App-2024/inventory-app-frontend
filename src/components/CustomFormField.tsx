export enum FormFieldTypes {
  SKELETON = "skeleton",
}

export const CustomFormField = () => {
  if (FormFieldTypes.SKELETON) {
    return;
  }

  return <div>CustomFormField</div>;
};
