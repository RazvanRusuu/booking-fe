import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { logout as mutationFn } from "../../api-client/apiClient";
import { useAppContext } from "../context/AppContext";

const LogoutButton = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const { mutate } = useMutation({
    mutationFn,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["me"],
        refetchType: "all",
      });
      showToast({ type: "success", message: "You have been logged out" });
      navigate("/sign-in");
    },
    onError: (err: Error) => {
      console.log(err);
      showToast({ message: err.message, type: "error" });
    },
  });

  const handleLogout = async () => {
    mutate();
  };

  return (
    <button className="bg-white py-2 px-1 text-blue-700" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
