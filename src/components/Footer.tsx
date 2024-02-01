import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-800 py-3 my-auto">
      <div className="container mx-auto text-white flex justify-between items-center">
        <Link to={"/"} className="text-xl font-bold">
          PlaceholderLogo
        </Link>
        <div className="space-x-4 font-bold">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
