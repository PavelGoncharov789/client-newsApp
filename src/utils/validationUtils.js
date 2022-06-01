import * as Yup from 'yup';

const passwordValidation = Yup.string()
  .min(6, 'Password should be of minimum 6 characters length')
  .max(12, 'Password should be of maximum 12 characters length')
  .matches(/^\S+[a-zA-Z0-9]$/, 'Password can only contain Latin letters.')
  .required('Required field');

const validationName = Yup.string()
  .min(2, 'Input field should be of minimum 2 characters length')
  .max(12, 'Input field should be of maximum 12 characters length')
  .required('Required field');

export const registrValidationSchema = Yup.object({
  firstName: validationName,
  lastName: validationName,
  login: Yup.string()
    .min(4, 'Login should be of minimum 4 characters length')
    .max(12, 'Login should be of maximum 12 characters length')
    .required('Required field'),
  password: passwordValidation,
  confirmPassword: Yup.string()
    .min(6, 'Password should be of minimum 6 characters length')
    .max(12, 'Password should be of maximum 12 characters length')
    .matches(/^\S+[a-zA-Z0-9]$/, 'Password can only contain Latin letters.')
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Обязательное поле'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const loginValidationSchema = Yup.object({
  login: validationName,
  password: passwordValidation,
});
