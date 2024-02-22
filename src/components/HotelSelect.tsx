import {
  useFormContext,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import {
  Select as SelectForm,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import ErrorField from "./ErrorField";

type TOptions = {
  name: string;
  value: string;
};

export interface ISelect<T extends FieldValues> {
  options: TOptions[];
  name: Path<T>;
  error: string | undefined;
  placeholder: string;
  rules: RegisterOptions<FieldValues>;
}

const Select = <T extends FieldValues>({
  name,
  options,
  error,
  placeholder,
  rules,
}: ISelect<T>) => {
  const context = useFormContext<T>();

  return (
    <>
      <Controller
        control={context.control}
        rules={rules}
        name={name}
        render={({ field }) => (
          <>
            <SelectForm onValueChange={field.onChange}>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                {options.map((opt) => {
                  return (
                    <SelectItem key={opt.value} value={opt.value}>
                      {opt.name}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </SelectForm>
            <ErrorField errors={error} />
          </>
        )}
      />
    </>
  );
};

export default Select;
