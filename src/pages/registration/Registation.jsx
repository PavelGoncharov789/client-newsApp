import React from 'react';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Header from '../../components/header/Header';
import { addUserAction } from '../../store/actions';

import './style.css';

function Registration() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Password should be of minimum 2 characters length')
      .max(12, 'Password should be of maximum 12 characters length')
      // .typeError('Должна быть строка')
      .required('Обязательное поле'),
    lastName: Yup.string()
      .min(2, 'Password should be of minimum 2 characters length')
      .max(12, 'Password should be of maximum 12 characters length')
      .required('Обязательное поле'),
    login: Yup.string()
      .min(4, 'Password should be of minimum 4 characters length')
      .max(12, 'Password should be of maximum 12 characters length')
      .required('Обязательное поле'),
    password: Yup.string()
      .min(6, 'Password should be of minimum 6 characters length')
      .max(12, 'Password should be of maximum 12 characters length')
      .matches(/^\S+[a-zA-Z0-9]$/, 'Password can only contain Latin letters.')
      .required('Обязательное поле'),
    confirmPassword: Yup.string()
      .min(6, 'Password should be of minimum 6 characters length')
      .max(12, 'Password should be of maximum 12 characters length')
      .matches(/^\S+[a-zA-Z0-9]$/, 'Password can only contain Latin letters.')
      .required('Обязательное поле'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      login: '',
      password: '',
      confirmPassword: '',
      email: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(addUserAction({ values }));
      console.log(JSON.stringify(values, null, 2));
      alert(1);
    },
  });

  return (
    <div>
      <Header />
      <form onSubmit={formik.handleSubmit}>
        <div className="registr">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            margin="dense"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.firstName && formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            id="outlined-basic"
            label="lastName"
            variant="outlined"
            margin="dense"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.lastName && formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            id="outlined-basic"
            label="login"
            variant="outlined"
            margin="dense"
            name="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.login && formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login}
          />
          <TextField
            id="outlined-basic"
            label="password"
            variant="outlined"
            margin="dense"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.password && formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            id="outlined-basic"
            label="confirmPassword"
            variant="outlined"
            margin="dense"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.confirmPassword && formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            margin="dense"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!(formik.touched.email && formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <Button
            variant="outlined"
            className="button"
            type="submit"
          >
            Регистрация
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Registration;
