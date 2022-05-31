import * as Yup from 'yup';

const isPassword = Yup.string()
  .min(6, 'Password should be of minimum 6 characters length')
  .max(12, 'Password should be of maximum 12 characters length')
  .matches(/^\S+[a-zA-Z0-9]$/, 'Password can only contain Latin letters.')
  .required('Обязательное поле');

const isName = Yup.string()
  .min(2, 'Input field should be of minimum 2 characters length')
  .max(12, 'Input field should be of maximum 12 characters length')
  .required('Обязательное поле');

export const validationSchema = Yup.object({
  firstName: isName,
  lastName: isName,
  login: Yup.string()
    .min(4, 'Login should be of minimum 4 characters length')
    .max(12, 'Login should be of maximum 12 characters length')
    .required('Обязательное поле'),
  password: isPassword,
  confirmPassword: isPassword,
  email: Yup.string().email('Invalid email').required('Required'),
});

export const loginValidationSchema = Yup.object({
  login: isName,
  password: isPassword,
});

export function readTokenFromLS() {
  return localStorage.getItem('token');
}

export function setTokenFromLS(token) {
  localStorage.setItem('token', token);
}
