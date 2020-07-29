import { TUser } from "../types/user-types";
import { TUserAction } from "../actions/user-actions";
import { SET_USER, CLEAR_USER } from "../constants/user-constant";

export interface IUserStore {
  isLogged: boolean | null;
  user: TUser | null;
  token: string | null;
}

const initialState: IUserStore = {
  isLogged: null,
  user: null,
  token: null,
};

export function userReducer(
  state: IUserStore = initialState,
  action: TUserAction
) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isLogged: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case CLEAR_USER: {
      return {
        ...initialState,
        isLogged: false,
      };
    }
    default:
      return { ...state };
  }
}
