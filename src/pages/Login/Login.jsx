import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';

import { logInUserAction } from '../../store/actions';
import { loginValidationSchema } from '../../utils/validationUtils';

import './style.css';

function Login() {
  const authUser = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      dispatch(logInUserAction(values));
    },
  });

  if (authUser?.id) {
    return <Navigate to="/" />;
  }

  const loginFormFields = [
    {
      label: 'Логин',
      name: 'login',
      type: 'text',
    }, {
      label: 'Пароль',
      name: 'password',
      type: 'password',
    },
  ];

  return (
    <div>
      <Header />
      <form onSubmit={formik.handleSubmit}>
        <div className="login-form">
          {loginFormFields.map(
            ({ label, name, type }) => (
              <TextField
                key={name}
                id="outlined-basic"
                label={label}
                variant="outlined"
                margin="dense"
                name={name}
                type={type}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={!!(formik.touched[name] && formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
              />
            ),
          )}
          <div>
            <Button
              variant="outlined"
              className="button-login"
              disabled={
                Object.keys((formik.touched).length !== loginFormFields.length
                || Object.keys(formik.touched).length !== 0)
                && Object.keys(formik.errors).length
              }
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
