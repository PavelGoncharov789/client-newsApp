import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Header from '../../components/header/Header';
import { logInUserAction } from '../../store/actions';

import './style.css';

function Login() {
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    login: Yup.string()
      .min(4, 'Password should be of minimum 4 characters length')
      .max(12, 'Password should be of maximum 12 characters length')
      .required('Обязательное поле'),
    password: Yup.string()
      .min(6, 'Password should be of minimum 6 characters length')
      .max(12, 'Password should be of maximum 12 characters length')
      .matches(/^\S+[a-zA-Z0-9]$/, 'Password can only contain Latin letters.')
      .required('Обязательное поле'),
  });
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(logInUserAction(values));
    },
  });

  return (
    <div>
      <Header />
      <form onSubmit={formik.handleSubmit}>
        <div className="login-form">
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
            label="Password"
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
          <div>
            <Button
              variant="outlined"
              className="button"
              type="submit"
            >
              Вход
            </Button>
            <Link to="/registration" className="link">
              <Button
                variant="outlined"
                className="button"
              >
                Регистрация
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
