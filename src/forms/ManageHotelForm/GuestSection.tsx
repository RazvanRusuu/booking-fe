import { useFormContext } from "react-hook-form";
import Input from "../../components/Input";
import { IHotelFormData } from "./ManageHotelForm";

const GuestSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IHotelFormData>();
  console.log(errors);
  return (
    <>
      <h2 className=" font-bold text-gray-600 mt-3">Guests</h2>
      <div className="flex flex-wrap gap-10 bg-slate-300 py-6 px-4 rounded-sm">
        <Input
          label="Adults"
          name="adultCount"
          register={register}
          type="number"
          min={0}
          errors={errors.adultCount?.message}
          validation={{ required: "This field is required" }}
        />
        <Input
          label="Childs"
          name="childCount"
          register={register}
          type="number"
          min={0}
          errors={errors.childCount?.message}
          validation={{ required: "This field is required" }}
        />
      </div>
    </>
  );
};

export default GuestSection;
