import { FormDataRegister } from "../pages/Register";
import { IFormDataSignIn } from "../pages/SignIn";

type ErrorType = {
  msg: string;
  path: string;
};

export class CustomError extends Error {
  errors: ErrorType[];

  constructor(message: string, err: ErrorType[]) {
    super(message);
    this.errors = err || [];
    this.stack = new Error().stack;
  }
}
