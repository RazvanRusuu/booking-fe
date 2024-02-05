import { InputHTMLAttributes } from "react";
import {
  UseFormRegister,
  RegisterOptions,
  FieldValues,
  Path,
} from "react-hook-form";
import ErrorField from "./ErrorField";

export interface IInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string | undefined;
  register: UseFormRegister<T>;
  name: Path<T>;
  label: string;
  validation?: RegisterOptions<FieldValues>;
}

const Input = <T extends FieldValues>({
  register,
  name,
  label,
  validation,
  errors,
  ...rest
}: IInputProps<T>) => {
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
