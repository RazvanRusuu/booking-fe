import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";

export interface IHotelFormData {
  name: string;
  city: string;
  country: string;
  description: string;
  type: string;
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

  console.log(formMethods.formState.errors);

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="xl:max-w-screen-md"
      >
        <DetailsSection />
        <button>submit</button>
      </form>
    </FormProvider>
  );
};

export default ManageHotelForm;
