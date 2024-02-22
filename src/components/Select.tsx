import { useFormContext, Controller } from "react-hook-form";
import {
  Select as SelectShad,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { IHotelFormData } from "../forms/ManageHotelForm/ManageHotelForm";

export interface ISelect {
  options: [];
}

const Select = ({ options }) => {
  const context = useFormContext<IHotelFormData>();

  return (
    <>
      <Controller
        control={context.control}
        rules={{
          required: true,
        }}
        name="pricePerNight"
        render={({ field }) => (
          <SelectShad onValueChange={field.onChange}>
            <SelectTrigger>
              <SelectValue>Select an item</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {options.map((opt) => {
                return <SelectItem value={opt.value}>{opt.name}</SelectItem>;
              })}
            </SelectContent>
          </SelectShad>
        )}
      />
    </>
  );
};

export default Select;
