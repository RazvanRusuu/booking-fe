import { createContext, useContext, useState } from "react";

type ToastMessage = {
  message: string;
  type: "error" | "success";
  duration?: number;
};

type TAppContext = {
  toast: Pick<ToastMessage, "message" | "type"> | null;
  showToast: (toastMessage: ToastMessage) => void;
  isLoggedIn: false;
};

const AppContext = createContext<TAppContext | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (toastMessage: ToastMessage) => {
    setToast(toastMessage);

    setTimeout(() => {
      setToast(null);
    }, toastMessage.duration || 3000);
  };

  const contextValue: TAppContext = {
    showToast,
    toast,
    isLoggedIn: false,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as TAppContext;
};
