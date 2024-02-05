import { CustomError } from "../src/utils/customFieldError";
import { FormDataRegister } from "../src/pages/Register";
import { IFormDataSignIn } from "../src/pages/SignIn";

const API_BASE_URL = import.meta.env.VITE_API_URL as string;

export const register = async (data: FormDataRegister) => {
  const response = await fetch(`${API_BASE_URL}/api/users/register`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const body = await response.json();

  if (!response.ok) {
    if (body.fieldErrors) {
      throw new CustomError(body.message, body.fieldErrors);
    } else {
      throw new Error(body.message);
    }
  }

  return body;
};

export const signIn = async (data: IFormDataSignIn) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const body = await response.json();

  if (!response.ok) {
    if (body.fieldErrors) {
      throw new CustomError(body.message, body.fieldErrors);
    } else {
      throw new Error(body.message);
    }
  }

  return body;
};
