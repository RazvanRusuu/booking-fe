import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
  });

  console.log(errors);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="font-bold text-2xl mb-6">Create an account</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <label className="font-bold flex flex-col flex-1 text-gray-600">
            First Name
            <input
              className="rounded-md border border-gray-200 font-normal focus-visible:border-gray-500"
              type="text"
              {...register("firstName", {
                required: "This field is required",
              })}
            />
          </label>
          <label className="font-bold flex flex-1 flex-col text-gray-600">
            Last Name
            <input
              className="rounded-md border border-gray-200 font-normal"
              type="text"
              {...register("lastName", {
                required: "This field is required",
              })}
            />
          </label>
        </div>
        <label className="font-bold flex flex-1 flex-col text-gray-600">
          Email
          <input
            className="rounded-md border border-gray-200 font-normal"
            type="email"
            {...register("email", {
              required: "This field is required",
            })}
          />
        </label>
        <label className="font-bold flex flex-1 flex-col text-gray-600">
          Password
          <input
            className="rounded-md border border-gray-200"
            type="password"
            {...register("password", {
              required: "This field is required",
              minLength: 6,
            })}
          />
        </label>
        <label className="font-bold flex flex-1 flex-col text-gray-600">
          Confirm Password
          <input
            className="rounded-md border border-gray-200"
            type="password"
            {...register("confirmPassword", {
              minLength: {
                value: 6,
                message: "Password must be 6 characters or long",
              },
              validate: (value, frormValues) => {
                return (
                  value !== frormValues.password && "Password do not match"
                );
              },
            })}
          />
        </label>
        <button>Create an account</button>
      </form>
    </div>
  );
};

export default Register;
