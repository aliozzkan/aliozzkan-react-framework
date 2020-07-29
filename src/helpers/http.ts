import axios from "axios";
import {store} from "store";

export const http = (recaptchaKey: string | null = null) => {
  const reduxStore: store = store.getState();
  const worker = axios.create();
  if(reduxStore.userStore.isLogged) {
    worker.defaults.headers.common["Authorization"] = "Bearer " + reduxStore.userStore.token;
  }
  if(!!recaptchaKey) {
    worker.defaults.headers.common["captcha"] = recaptchaKey;
  }

  return worker;
}