import { AxiosError } from "axios";

export interface FetchData<T> {
  status: "fulfilled" | "rejected" | "pending" | null;
  data: T | null;
  error: AxiosError<any> | null;
  isPending: boolean;
  isRejected: boolean;
  isFulfilled: boolean;
}
const initialValue = {
  status: null,
  data: null,
  error: null,
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

export function createInitialValue<T>() {
  const initial: FetchData<T> = {...initialValue};
  return initial;
}

export interface IMutationFunction {
  fulfilled: (data: any) => void;
  rejected: (err: any) => void;
  pending: () => void;
  reset: () => void;
}

export function mutationFetch<T>(
  t: { setState: (object: any) => void },
  stateName: any
): IMutationFunction {
  return {
    pending: () => {
      t.setState({
        [stateName]: {
          ...initialValue,
          status: "pending",
          isPending: true,
        },
      });
    },
    fulfilled: (data: T) => {
      t.setState({
        [stateName]: {
          ...initialValue,
          status: "fulfilled",
          data: data,
          isFulfilled: true,
        },
      });
    },
    rejected: (error: any) => {
      t.setState({
        [stateName]: {
          ...initialValue,
          status: "rejected",
          error,
          isRejected: true,
        },
      });
    },
    reset: () => {
      t.setState({
        [stateName]: {
          ...initialValue,
        },
      });
    },
  };
}
