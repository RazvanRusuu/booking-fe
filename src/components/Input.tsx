import { InputHTMLAttributes } from "react";
import { UseFormRegister, RegisterOptions } from "react-hook-form";
import { FormDataRegister } from "../pages/Register";
import ErrorField from "./ErrorField";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string | undefined;
  register: UseFormRegister<FormDataRegister>;
  name: "email" | "firstName" | "lastName" | "password" | "confirmPassword";
  label: string;
  validation?: RegisterOptions<FormDataRegister>;
}

const Input: React.FC<IInputProps> = ({
  register,
  name,
  label,
  validation,
  errors,
  ...rest
}) => {
  console.log(errors);
  return (
    <label className="font-bold flex flex-1 flex-col text-gray-600">
      {label}
      <input
        className="rounded-md border border-gray-200 py-1 px-2 font- font-normal focus-visible:outline-gray-400"
        {...register(name, validation)}
        {...rest}
      />
      <ErrorField errors={errors} />
    </label>
  );
};

export default Input;
