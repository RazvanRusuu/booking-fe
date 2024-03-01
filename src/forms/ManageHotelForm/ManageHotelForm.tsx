import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import FacilitiesSection from "./FacilitiesSection";
import TypeSection from "./TypeSection";
import GuestSection from "./GuestSection";
import ImageSection from "./ImageSection";

export interface IHotelFormData {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string[];
  pricePerNight: string;
  starRating: string;
  facilities: string[];
  imageFiles: FileList;
  adultCount: number;
  childCount: number;
}

interface IManageHotel {
  onSave: (data: FormData) => void;
  isLoading: boolean;
}

const ManageHotelForm = ({ onSave, isLoading }: IManageHotel) => {
  const formMethods = useForm<IHotelFormData>({
    defaultValues: {},
  });

  const onSubmit = (data: IHotelFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("description", data.description);
    formData.append("pricePerNight", data.pricePerNight);
    formData.append("starRating", data.starRating);
    formData.append("adultCount", data.adultCount.toString());
    formData.append("childCount", data.childCount.toString());

    data.type.forEach((type, index) => {
      formData.append(`type[${index}]`, type);
    });

    data.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    // Array.from(data.imageFiles).forEach((imageFile) => {
    //   formData.append("imageFiles", imageFile);
    // });

    onSave(formData);
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="xl:max-w-screen-md"
      >
        <DetailsSection />
        <TypeSection />
        <FacilitiesSection />
        <GuestSection />
        <ImageSection />
        <div className="flex justify-end">
          <button
            className="py-2 px-4 bg-blue-600 rounded-md text-white font-bold hover:bg-blue-700 mt-4 disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
