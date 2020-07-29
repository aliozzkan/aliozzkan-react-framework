import { useState } from "react";
import { AxiosError } from "axios";

interface Fulfilled<T> {
  status: "fulfilled";
  data: T;
  error: null;
  isPending: false;
  isRejected: false;
  isFulfilled: true;
}
interface Rejected {
  status: "rejected";
  data: null;
  error: AxiosError<any>;
  isPending: false;
  isRejected: true;
  isFulfilled: false;
}

interface Pending {
  status: "pending";
  data: null;
  error: null;
  isPending: true;
  isRejected: false;
  isFulfilled: false;
}

interface Null {
  status: null;
  data: null;
  error: null;
  isPending: false;
  isRejected: false;
  isFulfilled: false;
}


type UseFetchData<T> = (Fulfilled<T> | Rejected | Pending | Null);

export interface IMutationFunction {
  fulfilled: (data: any) => void;
  rejected: (err: any) => void;
  pending: () => void;
  reset: () => void;
}

const initialValue: Null = {
  status: null,
  data: null,
  error: null,
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

export const createFetchData = <T>(): UseFetchData<T> => {
  const freeData: UseFetchData<T> = initialValue;
  return freeData;
};

// Hook
export const useFetchData = <T>(): [UseFetchData<T>, IMutationFunction] => {
  const [_fetchData, _setFetchData] = useState<UseFetchData<T>>(initialValue);

  function pending() {
    _setFetchData({
      ...initialValue,
      status: "pending",
      isPending: true,
    });
  }

  function fulfilled(data: T) {
    _setFetchData({
      ...initialValue,
      status: "fulfilled",
      data: data,
      isFulfilled: true,
    });
  }

  function rejected(error: any) {
    _setFetchData({
      ...initialValue,
      status: "rejected",
      error,
      isRejected: true,
    });
  }

  function reset() {
    _setFetchData(initialValue);
  }

  return [_fetchData, { pending, fulfilled, rejected, reset }];
};
