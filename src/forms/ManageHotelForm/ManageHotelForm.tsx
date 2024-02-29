import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import FacilitiesSection from "./FacilitiesSection";
import TypeSection from "./TypeSection";
import GuestSection from "./GuestSection";

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
        <button>submit</button>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
