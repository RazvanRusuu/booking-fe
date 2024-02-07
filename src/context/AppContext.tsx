import { createContext, useContext, useState } from "react";
import { getUser } from "../../api-client/apiClient";
import { useQuery } from "@tanstack/react-query";

type ToastMessage = {
  message: string;
  type: "error" | "success";
  duration?: number;
};

type TAppContext = {
  toast: Pick<ToastMessage, "message" | "type"> | null;
  showToast: (toastMessage: ToastMessage | null) => void;
  isLoggedIn: boolean;
};

const AppContext = createContext<TAppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (toastMessage: ToastMessage | null) => {
    setToast(toastMessage);
  };

  const { isError } = useQuery({
    queryFn: getUser,
    queryKey: ["me"],
    retry: false,
  });

  const contextValue: TAppContext = {
    showToast,
    toast,
    isLoggedIn: !isError,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as TAppContext;
};
