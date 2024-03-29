import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { register as mutationFn } from "../../api-client/apiClient";

import Input from "../components/Input";
import { CustomError } from "../utils/customFieldError";
import { useNavigate } from "react-router-dom";
import { registerTemplate } from "./utilis/registerTemplate";
import { useAppContext } from "../context/AppContext";

export interface FormDataRegister {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const { mutate } = useMutation<void, CustomError | Error, FormDataRegister>({
    mutationFn,
    onError: (err) => {
      if (err instanceof CustomError) {
        err.errors.forEach((err) => {
          setError(err.path as keyof FormDataRegister, { message: err.msg });
        });
        return;
      }

      showToast({ message: err.message, type: "error" });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["me"] });
      showToast({ message: "Successfully register", type: "success" });
      navigate("/");
    },
    retry: false,
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormDataRegister>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: FormDataRegister) => {
    mutate(data);
  };

  return (
    <div className="container mx-auto">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-bold text-2xl mb-6">Create an account</h2>
        <div className="flex flex-col gap-6 max-w-72">
          {registerTemplate.map((field) => {
            const name = field.name as keyof FormDataRegister;
            return (
              <Input
                key={field.name}
                register={register}
                name={field.name as keyof FormDataRegister}
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
          Create an account
        </button>
      </form>
    </div>
  );
};

export default Register;
