import { hotelTypes } from "../../hotel-config";
import Selection from "../../components/Selection";

const TypeSection = () => {
  return (
    <div>
      <h2 className="font-bold text-gray-600 mb-3">Type</h2>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
        <Selection name="type" options={hotelTypes} />
      </div>
    </div>
  );
};

export default TypeSection;
