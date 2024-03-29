import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/utils";
import { useEffect } from "react";

const toastVariants = cva(
  `fixed z-50 rounded-md shadow-md py-2 px-2 transition-all grid place-items-center`,
  {
    variants: {
      variant: {
        success: "bg-green-500",
        error: "bg-red-500",
      },
      size: {
        lg: "w-1/2",
        md: "w-1/4",
        sm: "w-30",
      },
      position: {
        top: "top-5 right-4",
        center: "mx-auto",
        bottom: "bottom-5",
      },
    },
    defaultVariants: {
      size: "sm",
      position: "top",
    },
  }
);

export type ToastProps = VariantProps<typeof toastVariants> & {
  delay?: number;
  children?: React.ReactNode;
  className?: string;
  message: string;
  onCLose: () => void;
};

const Toast: React.FC<ToastProps> = ({
  variant,
  size,
  position,
  className,
  message,
  onCLose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onCLose();
    }, 3000);

    () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={cn(toastVariants({ variant, size, position, className }))}>
      <span className="text-white">{message}</span>
    </div>
  );
};

export default Toast;
