export type ValidationRule = {
  value: number;
  message: string;
};

export type ValidationConfig = {
  required?: string;
  minLength?: ValidationRule;
};

interface SignInTemplate {
  label: string;
  name: string;
  type: string;
  validation: ValidationConfig;
}

export const signInTemplate: SignInTemplate[] = [
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
      required: "This field is required",
    },
  },
];
