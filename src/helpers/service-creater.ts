import { AxiosPromise, AxiosError } from "axios";
import { IMutationFunction } from "hooks/use-fetch-data";

export interface ServerError {}
export type err = AxiosError<any>;

type apiFunction<D> = (arg: {
  jsonData?: D | null;
  recaptchaKey?: string | null;
}) => AxiosPromise<any>;

export function createService<D, T>(apiFunction: apiFunction<D>) {
  type cbService = {
    onSuccess?: (data: T) => void;
    onError?: (error: err) => void;
  };

  const defaultServiceCallback: cbService = {
    onSuccess: () => {},
    onError: () => {},
  };

  return function (
    mutation: IMutationFunction | null,
    cb: cbService = defaultServiceCallback
  ) {
    return async function (
      apiFunctionData: {
        jsonData?: null | D;
        recaptchaKey?: string | null;
      } | null = null
    ) {
      if (mutation) {
        mutation.pending();
      }
      try {
        const data: T = await apiFunction({
          jsonData: apiFunctionData?.jsonData,
          recaptchaKey: apiFunctionData?.recaptchaKey,
        }).then((r) => r.data);
        if (mutation) {
          mutation.fulfilled(data);
        }
        if (cb.onSuccess) {
          cb.onSuccess(data);
        }
        return true;
      } catch (error) {
        if (mutation) {
          mutation.rejected(error);
        }
        if (cb.onError) {
          cb.onError(error);
        }
        console.log(error);
        return false;
      }
    };
  };
}

export interface IArgs<T> {
  jsonData: T | null;
  recaptchaKey?: string | null;
}
