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

const ManageHotelForm = () => {
  const formMethods = useForm<IHotelFormData>({
    defaultValues: {},
  });

  const onSubmit = (data: IHotelFormData) => {
    console.log(data);
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
          <button className="py-2 px-4 bg-blue-600 rounded-md text-white font-bold hover:bg-blue-700 mt-4">
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
