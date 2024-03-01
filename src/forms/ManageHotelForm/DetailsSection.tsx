import { useFormContext } from "react-hook-form";
import Input from "../../components/Input";

import { IHotelFormData } from "./ManageHotelForm";
import ErrorField from "../../components/ErrorField";
import Select from "../../components/HotelSelect";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IHotelFormData>();
  return (
    <div className="flex flex-col gap-4 mb-4">
      <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
      <Input
        register={register}
        name="name"
        label="Name"
        type="text"
        validation={{ required: "This field is required" }}
        errors={errors.name?.message}
      />
      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
        <Input
          register={register}
          name="city"
          label="City"
          type="text"
          validation={{ required: "This field is required" }}
          errors={errors.city?.message}
        />
        <Input
          register={register}
          name="country"
          label="Country"
          type="text"
          validation={{ required: "This field is required" }}
          errors={errors.country?.message}
        />
      </div>
      <label className="font-bold flex flex-1 flex-col text-gray-600">
        Description
        <textarea
          rows={6}
          className="rounded-md border border-gray-200 py-1 px-2 font- font-semibold focus-visible:outline-gray-400"
          {...register("description", { required: "This field is required" })}
        ></textarea>
        <ErrorField errors={errors.description?.message} />
      </label>
      <Input
        label="Price per Night"
        name="pricePerNight"
        register={register}
        errors={errors.pricePerNight?.message}
        validation={{ required: "This field is required" }}
      />
      <Select
        options={[
          { name: "1", value: "1" },
          { name: "2", value: "2" },
          { name: "3", value: "3" },
          { name: "4", value: "4" },
          { name: "5", value: "5" },
        ]}
        error={errors.starRating?.message}
        name={"starRating"}
        placeholder={"Select a rating"}
        rules={{ required: "This field is required" }}
      />
    </div>
  );
};

export default DetailsSection;
