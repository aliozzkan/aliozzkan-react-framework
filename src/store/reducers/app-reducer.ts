import { TAppAction } from "../actions/app-actions";
import { SET_LANGUAGE } from "../constants/app-constants";

export type TAppStore = {
  language: string;
};

const initialState: TAppStore = {
  language: "",
};

export function appReducer(state: TAppStore = initialState, action: TAppAction): TAppStore {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        language: action.payload.language,
      };
    default:
      return {
        ...state
      }
  }
}
