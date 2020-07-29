const tokenName = "aliozzkan-react-framework";

export function setToken(token: string) {
  localStorage.setItem(tokenName, token);
}

export function getToken() {
  return localStorage.getItem(tokenName);
}

export function clearToken() {
  return localStorage.removeItem(tokenName);
}
