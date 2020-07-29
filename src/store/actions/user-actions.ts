import * as userConstants from "../constants/user-constant";
import { TUser } from "../types/user-types";

type TSetUserPayload = {
  user: TUser;
  token: string;
};

export interface ISetUser {
  type: userConstants.SET_USER;
  payload: TSetUserPayload;
}

// Actions
export function setUser(payload: TSetUserPayload): ISetUser {
  return {
    type: userConstants.SET_USER,
    payload,
  };
}

export type IClearUser = {
  type: userConstants.CLEAR_USER
}

export function clearUser(): IClearUser {
  return {
    type: userConstants.CLEAR_USER
  }
}

export type TUserAction = ISetUser | IClearUser;
