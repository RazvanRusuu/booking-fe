import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-800 py-6">
      <div className=" container mx-auto flex justify-between">
        <span className="text-lg text-white font-bold">
          <Link to="/">
            <span>PlaceholderLogo</span>
          </Link>
        </span>
        <div className="text-white text-lg font-bold space-x-2">
          {/* TODO add cstyle for buttons */}
          {!isLoggedIn && <Link to={"/sign-in"}>Sign In</Link>}
          {isLoggedIn && (
            <>
              <Link to={"/my-bookings"}>Bookings</Link>
              <Link to={"/my-hotels"}>Hotels</Link>
              <LogoutButton />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
