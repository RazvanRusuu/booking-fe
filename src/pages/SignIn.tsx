import { useForm } from "react-hook-form";
import { signInTemplate } from "./utilis/signInTemplate";
import Input from "../components/Input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CustomError } from "../utils/customFieldError";
import { signIn as mutationFn } from "../../api-client/apiClient";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export interface IFormDataSignIn {
  email: string;
  password: string;
}

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IFormDataSignIn>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate } = useMutation<void, CustomError | Error, IFormDataSignIn>({
    mutationFn,

    onSuccess: async () => {
      await queryClient.fetchQuery({ queryKey: ["me"] });
      showToast({ message: "You are signed in", type: "success" });
      navigate("/");
    },
    onError: (err) => {
      if (err instanceof CustomError) {
        err.errors.forEach((err) => {
          return setError(err.path as keyof IFormDataSignIn, {
            message: err.msg,
          });
        });
      }

      showToast({ type: "error", message: err.message });
    },
  });

  const onSubmit = (data: IFormDataSignIn) => {
    mutate(data);
  };

  return (
    <div className="container mx-auto">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-bold text-2xl mb-6">Sign In</h2>
        <div className="flex flex-col gap-6 max-w-72">
          {signInTemplate.map((field) => {
            const name = field.name as keyof IFormDataSignIn;
            return (
              <Input
                key={field.name}
                register={register}
                name={field.name as keyof IFormDataSignIn}
                label={field.label}
                validation={field.validation}
                errors={errors[name]?.message}
                type={field.type}
              />
            );
          })}
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white rounded-sm py-2 px-1 font-bold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
