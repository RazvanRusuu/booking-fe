import { useFormContext } from "react-hook-form";
import { IHotelFormData } from "./ManageHotelForm";
import ErrorField from "../../components/ErrorField";

const ImageSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<IHotelFormData>();

  return (
    <div>
      <h2 className="font-bold text-gray-600 mb-3">Images</h2>
      <div className="border rounded p-4 flex flex-col gap-4">
        <input
          type="file"
          multiple
          accept="image/*"
          className="w-full text-gray-700"
          {...register("imageFiles", {
            validate: (imageFiles) => {
              const totalLength = imageFiles.length;
              if (totalLength < 0) {
                return "At least one image should be added";
              }
              if (totalLength > 6) {
                return "Total number of images cannot be more than 6";
              }
            },
          })}
        />
      </div>
      <ErrorField errors={errors.imageFiles?.message} />
    </div>
  );
};

export default ImageSection;
