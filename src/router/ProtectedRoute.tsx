import { Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAppContext();
  const navigate = useNavigate();

  if (!isLoggedIn) {
    navigate("/");
    return;
  }

  return <Outlet />;
};

export default ProtectedRoute;
