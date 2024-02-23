import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../hotel-config";
import { IHotelFormData } from "./ManageHotelForm";
import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const TypeSelection = () => {
  const context = useFormContext<IHotelFormData>();
  const [select, setSelect] = useState<string[]>([]);

  const onSelect = (type: string) => {
    if (select.includes(type)) {
      const newSelect = select.filter((select) => select !== type);
      setSelect(newSelect);
      return;
    } else {
      setSelect((prev) => {
        context.setValue("type", [...prev, type]);
        return [...prev, type];
      });
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Type</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {hotelTypes.map((type) => {
          return (
            <button
              key={type}
              type="button"
              onClick={() => onSelect(type)}
              className={twMerge(
                clsx(
                  "flex-1 flex-shrink-0 rounded-3xl px-2 py-1 bg-blue-500 text-gray-50 font-bold",
                  select.includes(type) && "bg-blue-800"
                )
              )}
            >
              {type}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TypeSelection;
