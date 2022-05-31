import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/header/Header';
import { logInUserAction } from '../../store/actions';
import { loginValidationSchema } from '../../utils/index';

import './style.css';

function Login() {
  const authUser = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    loginValidationSchema,
    onSubmit: (values) => {
      dispatch(logInUserAction(values));
    },
  });

  if (authUser?.id) {
    return <Navigate to="/" />;
  }

  const arrayFromLogin = [
    {
      label: 'login',
      name: 'login',
    }, {
      label: 'Password',
      name: 'password',
      type: 'password',
    },
  ];

  return (
    <div>
      <Header />
      <form onSubmit={formik.handleSubmit}>
        <div className="login-form">
          {arrayFromLogin.map(({ label, name, type }) => (
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              margin="dense"
              name={name}
              type={type}
              value={formik.values.login}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!(formik.touched.login && formik.errors.login)}
              helperText={formik.touched.login && formik.errors.login}
            />
          ))}
          <div>
            <Button
              variant="outlined"
              className="button-login"
              type="submit"
            >
              Вход
            </Button>
            <Link to="/registration" className="link">
              <Button
                variant="outlined"
                className="button-login"
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
