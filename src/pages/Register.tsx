import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signIn as mutationFn } from "../../api-client/apiClient";

import Input from "../components/Input";
import { CustomError } from "../Error/CustomFieldsError";

export interface FormDataRegister {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { mutate } = useMutation<void, CustomError | Error, FormDataRegister>({
    mutationFn,
    onError: (err) => {
      if (err instanceof CustomError) {
        err.errors.forEach((err) => {
          setError(err.path, { message: err.msg });
        });
        return;
      }

      //   toast with error
      console.log(err);
    },
    onSuccess: () => {
      console.log("success");
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
        <div className="flex flex-col md:flex-row gap-6">
          <Input
            name="firstName"
            type="text"
            label="First Name"
            register={register}
            errors={errors.firstName?.message}
            options={{ required: "This field is required" }}
          />
          <Input
            name="lastName"
            type="text"
            label="Last Name"
            register={register}
            errors={errors.lastName?.message}
            options={{ required: "This field is required" }}
          />
        </div>
        <Input
          name="email"
          type="email"
          label="Email"
          register={register}
          errors={errors.email?.message}
          options={{ required: "This field is required" }}
        />
        <Input
          name="password"
          type="password"
          label="password"
          register={register}
          errors={errors.password?.message}
          options={{
            minLength: {
              value: 6,
              message: "This field must have 6 characters or long",
            },
            validate: (value) => {
              return value ? true : "This field is required";
            },
          }}
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          register={register}
          errors={errors.confirmPassword?.message}
          options={{
            minLength: {
              value: 6,
              message: "This field must have 6 characters or long",
            },
            validate: (value, formValues) => {
              if (!value) return "This field is required";
              const passwordsMatch = value === formValues.password;
              console.log("Passwords Match:", passwordsMatch);
              return passwordsMatch ? true : "Passwords do not match";
            },
          }}
        />
        <button className="mt-4 bg-blue-600 text-white rounded-sm py-2 px-1 font-bold">
          Create an account
        </button>
      </form>
    </div>
  );
};

export default Register;
