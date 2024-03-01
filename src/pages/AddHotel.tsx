import { useMutation } from "@tanstack/react-query";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";
import { useAppContext } from "../context/AppContext";
import { addHotel } from "../../api-client/apiClient";

const AddHotel = () => {
  const { showToast } = useAppContext();
  const { mutate, isPending } = useMutation({
    mutationFn: addHotel,
    onSuccess: () => {
      showToast({ message: "Hotel Saved", type: "success" });
    },
    onError: (err) => {
      console.log(err);
      showToast({ message: "Error Saving Hotel", type: "error" });
    },
  });

  const handleSave = (formData: FormData) => {
    console.log(formData);
    mutate(formData);
  };

  return <ManageHotelForm onSave={handleSave} isLoading={isPending} />;
};

export default AddHotel;
