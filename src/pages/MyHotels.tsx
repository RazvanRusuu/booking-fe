import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getMyHotels } from "../../api-client/apiClient";

const MyHotels = () => {
  const {
    data: hotels,
    isError,
    error,
  } = useQuery({
    queryFn: getMyHotels,
    queryKey: ["my-hotels"],
    staleTime: 60 * 60 * 24 * 1000,
  });

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to={"/add-hotel"}
          className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500 rounded-md"
        >
          Add Hotel
        </Link>
      </div>
      <div className="grid grid-cols-1">
        {hotels?.data.map((hotel) => (
          <div key={hotel._id}>
            <h3>{hotel.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
