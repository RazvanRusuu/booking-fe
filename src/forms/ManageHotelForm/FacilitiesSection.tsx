import { hotelFacilities } from "../../hotel-config";
import Selection from "../../components/Selection";

const FacilitiesSection = () => {
  return (
    <div>
      <h2 className="font-bold text-gray-600 mb-3">Facilities</h2>
      <div className="grid grid-cols-3 lg:grid-cols-4 gap-2">
        <Selection name="facilities" options={hotelFacilities} />
      </div>
    </div>
  );
};

export default FacilitiesSection;
