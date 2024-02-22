import { InputHTMLAttributes } from "react";
import {
  UseFormRegister,
  RegisterOptions,
  FieldValues,
  Path,
} from "react-hook-form";
import ErrorField from "./ErrorField";
import { cn } from "../utils/utils";

export interface IInputProps<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  errors?: string | undefined;
  register: UseFormRegister<T>;
  name: Path<T>;
  label: string;
  validation?: RegisterOptions<FieldValues>;
  className?: string;
}

const Input = <T extends FieldValues>({
  register,
  name,
  label,
  validation,
  errors,
  className,
  ...rest
}: IInputProps<T>) => {
  return (
    <label
      className={cn("font-bold flex flex-1 flex-col text-gray-600", className)}
    >
      {label}
      <input
        className="rounded-md border border-gray-200 py-1 px-2 font- font-semibold focus-visible:outline-gray-400"
        {...register(name, validation)}
        {...rest}
      />
      <ErrorField errors={errors} />
    </label>
  );
};

export default Input;
