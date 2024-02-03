import { CustomError } from "../src/Error/CustomFieldsError";
import { FormDataRegister } from "../src/pages/Register";

export const signIn = async (data: FormDataRegister) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL as string}/api/users/register`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const body = await response.json();

  console.log(body);

  if (!response.ok) {
    if (body.fieldErrors) {
      throw new CustomError(body.message, body.fieldErrors);
    } else {
      throw new Error(body.message);
    }
  }

  return body;
};
