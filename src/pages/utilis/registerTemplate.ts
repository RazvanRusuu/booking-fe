import { FormDataRegister } from "../Register";
import { RegisterOptions } from "react-hook-form";

export type RegisterField = {
  name: keyof FormDataRegister;
  type: string;
  label: string;
  validation?: RegisterOptions;
};

export type RegisterTemplate = RegisterField[];

export const registerTemplate: RegisterTemplate = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    validation: {
      required: "This field is required",
    },
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    validation: {
      required: "This field is required",
    },
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    validation: {
      required: "This field is required",
    },
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    validation: {
      minLength: {
        value: 6,
        message: "This field must have 6 characters or more",
      },
      validate: (value: string) => {
        return value ? true : "This field is required";
      },
    },
  },
  {
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    validation: {
      minLength: {
        value: 6,
        message: "This field must have 6 characters or more",
      },
      validate: (value: string, formValues: any) => {
        if (!value) return "This field is required";
        const passwordsMatch = value === formValues.password;
        return passwordsMatch ? true : "Passwords do not match";
      },
    },
  },
];
