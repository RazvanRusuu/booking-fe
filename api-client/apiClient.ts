import { CustomError } from "../src/utils/customFieldError";
import { FormDataRegister } from "../src/pages/Register";
import { IFormDataSignIn } from "../src/pages/SignIn";
import { IHotel } from "../../backend/src/models/hotels";

declare global {
  interface Response {
    message: string;
  }
}

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

export const getUser = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/me`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Something went wrong with authentication");
  }

  const body = await response.json();

  return body;
};

export const logout = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error during sign out");
  }

  const body = await response.json();

  return body;
};

export const addHotel = async (data: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    method: "POST",
    credentials: "include",
    body: data,
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.message);
  }

  return body;
};

interface IHotelPromise {
  data: IHotel[];
  message: string;
}

export const getMyHotels = async (): Promise<IHotelPromise> => {
  const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
    credentials: "include",
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.message ?? "Something went wrong");
  }

  return body;
};
