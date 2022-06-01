import * as Yup from 'yup';

const passwordValidation = Yup.string()
  .min(6, 'Password should be of minimum 6 characters length')
  .max(12, 'Password should be of maximum 12 characters length')
  .matches(/^\S+[a-zA-Z0-9]$/, 'Password can only contain Latin letters.')
  .required('Required field');

const nameValidation = (label) => Yup.string()
  .min(2, `${label} should be of minimum 2 characters length`)
  .max(12, 'Input field should be of maximum 12 characters length')
  .required('Required field');

const loginValidation = Yup.string()
  .min(4, 'Login should be of minimum 4 characters length')
  .max(12, 'Login should be of maximum 12 characters length')
  .required('Required field');

export const registrValidationSchema = Yup.object({
  firstName: nameValidation('Name'),
  lastName: nameValidation('Last name'),
  login: loginValidation,
  password: passwordValidation,
  confirmPassword: passwordValidation
  .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export const loginValidationSchema = Yup.object({
  login: loginValidation,
  password: passwordValidation,
});
