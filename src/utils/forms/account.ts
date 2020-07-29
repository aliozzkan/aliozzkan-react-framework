export type login = {
  email: string;
  password: string;
};
export const login = {
  email: {
    minLength: 3,
    maxLength: 22,
    type: "text",
    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line
    required: true,
    title: "Enter Email Address",
    label: "Email",
    formText: "We'll never share your email with anyone else.",
    autoComplete: "email"
  },
  password: {
    minLength: 6,
    maxLength: 16,
    type: "password",
    pattern: "^[0-9a-zA-Z]+$",
    required: true,
    title: "Enter Password",
    autoComplete: "current-password",
    label: "Password",
  },
};
