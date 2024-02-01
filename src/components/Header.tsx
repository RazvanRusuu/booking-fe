import { Link } from "react-router-dom";

const Header = () => {
  const isLoggedIn = false;
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
          {isLoggedIn && <div>User Login</div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
