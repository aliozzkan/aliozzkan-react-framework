import * as Constants from "../constants/app-constants";

type TPayload = {
  language: string;
};

type TSetLanguage = {
  type: Constants.SET_LANGUAGE;
  payload: TPayload;
};

export function setLanguageAction(payload: TPayload): TSetLanguage {
  return {
    type: Constants.SET_LANGUAGE,
    payload,
  };
}

export type TAppAction = TSetLanguage;
