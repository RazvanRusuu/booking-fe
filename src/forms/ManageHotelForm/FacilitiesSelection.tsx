import { hotelFacilities } from "../../hotel-config";
import Selection from "../../components/Selection";

const FacilitiesSelection = () => {
  return (
    <div>
      <h2 className="text-gray-700 mb-3">Facilities</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <Selection name="facilities" options={hotelFacilities} />
      </div>
    </div>
  );
};

export default FacilitiesSelection;
