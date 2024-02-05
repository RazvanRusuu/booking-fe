import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utils/utils";

const toastVariants = cva(`fixed top-10 rounded-md shadow-md transition-all`, {
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
      top: "top-5",
      center: "mx-auto",
      bottom: "bottom-5",
    },
  },
  defaultVariants: {
    size: "sm",
    position: "top",
  },
});

export type ToastProps = VariantProps<typeof toastVariants> & {
  delay: number;
  class: string;
  children: React.ReactNode;
  className: string;
};

const Toast: React.FC<ToastProps> = ({
  variant,
  size,
  position,
  className,
  children,
}) => {
  return (
    <div className={cn(toastVariants({ variant, size, position, className }))}>
      {children}
    </div>
  );
};

export default Toast;
