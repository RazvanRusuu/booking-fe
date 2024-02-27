import { hotelTypes } from "../../hotel-config";
import Selection from "../../components/Selection";

const TypeSelection = () => {
  return (
    <div>
      <h2 className="text-gray-700 mb-3">Type</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <Selection name="type" options={hotelTypes} />
      </div>
    </div>
  );
};

export default TypeSelection;
