import { baseURL } from "helpers/server-url";

const BASE_URL = baseURL();

// LOGIN APO
export const LOGIN_URL = BASE_URL + "/login";
export const REGISTER_URL = BASE_URL + "/register";
export const ACCOUNT_URL = BASE_URL + "/users/2";