import { TUser } from "models";
export type TLogin = {
  req: {
    email: string;
    password: string;
  };
  res: {
    token: string;
  };
};
export type TRegister = {
  req: {
    email: string;
    password: string;
  };
  res: {
    id: number;
    token: string;
  };
};

export type TAccount = {
  req: {};
  res: {
    data: TUser;
  };
};
