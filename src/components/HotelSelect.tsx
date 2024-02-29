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
import { IHotelFormData } from "../forms/ManageHotelForm/ManageHotelForm";

type TOptions = {
  name: string;
  value: string;
};

type IForm = IHotelFormData;

export interface ISelect<IForm extends FieldValues> {
  options: TOptions[];
  name: Path<IForm>;
  error: string | undefined;
  placeholder: string;
  rules: RegisterOptions<FieldValues>;
}

const Select = ({
  name,
  options,
  error,
  placeholder,
  rules,
}: ISelect<IForm>) => {
  const context = useFormContext<IForm>();

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
              <ErrorField errors={error} />
            </SelectForm>
          </>
        )}
      />
    </>
  );
};

export default Select;
