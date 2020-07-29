import { http } from "helpers/http";
import { createService } from "helpers/service-creater";
import * as Constants from "./constants";
import { TLogin, TRegister, TAccount } from "./types";

export const LoginService = createService<TLogin["req"], TLogin["res"]>(
  ({ jsonData }) => http().post(Constants.LOGIN_URL, jsonData)
);
export type LoginService = TLogin;

export const RegisterService = createService<
  TRegister["req"],
  TRegister["res"]
>(({ jsonData }) => http().post(Constants.LOGIN_URL, jsonData));
export type RegisterService = TRegister;

export const AccountService = createService<TAccount["req"], TAccount["res"]>(
  () => http().get(Constants.ACCOUNT_URL)
);
export type AccountService = TAccount;
