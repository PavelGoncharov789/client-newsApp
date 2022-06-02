export function readTokenFromLS() {
  return localStorage.getItem('token');
}

export function setTokenFromLS(token) {
  localStorage.setItem('token', token);
}

export function removeTokenFromLS() {

  localStorage.removeItem('token');
}
