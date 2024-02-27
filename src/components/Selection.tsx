import { useFormContext, Path } from "react-hook-form";
import { IHotelFormData } from "../forms/ManageHotelForm/ManageHotelForm";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import ErrorField from "./ErrorField";

type IForm = IHotelFormData;

interface ISelection {
  options: string[];
  name: Path<IForm>;
}

const Selection: React.FC<ISelection> = ({ options, name }) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<IForm>();

  const hotelTypes = watch(name);

  return (
    <>
      <ErrorField errors={errors.type?.message} />
      {options.map((opt) => (
        <label key={opt}>
          <input
            type="checkbox"
            value={opt}
            {...register(name, {
              validate: (name) => {
                if (
                  !name ||
                  (name && Array.isArray(name) && name.length === 0)
                ) {
                  return "At least one type is required";
                }
              },
            })}
            className="hidden"
          />
          <span
            className={twMerge(
              clsx(
                "inline-block w-full text-center rounded-3xl px-2 py-1 bg-slate-300 text-gray-600 font-bold",
                Array.isArray(hotelTypes) &&
                  hotelTypes.includes(opt) &&
                  "bg-gray-700 text-gray-200"
              )
            )}
          >
            {opt}
          </span>
        </label>
      ))}
    </>
  );
};

export default Selection;
