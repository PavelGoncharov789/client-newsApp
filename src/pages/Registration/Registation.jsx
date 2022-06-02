import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { Button, TextField } from '@mui/material';

import Header from '../../components/Header/Header';

import { addUserAction } from '../../store/actions';
import { registrValidationSchema } from '../../utils/validationUtils';

import './style.css';

function Registration() {
  const authUser = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      login: '',
      password: '',
      confirmPassword: '',
      email: '',
    },
    validationSchema: registrValidationSchema,
    onSubmit: (values) => {
      dispatch(addUserAction(values));
    },
  });

  const registrationFormFields = [
    { label: 'Логин', name: 'login', type: 'text' },
    { label: 'Имя', name: 'firstName', type: 'text' },
    { label: 'Фамилия', name: 'lastName', type: 'text' },
    { label: 'Пароль', name: 'password', type: 'password' },
    { label: 'Повторите пароль', name: 'confirmPassword', type: 'password' },
    { label: 'Email', name: 'email', type: 'email' },
  ];

  if (authUser?.id) {
    return <Navigate to="/user" />;
  }

  return (
    <div>
      <Header />
      <form onSubmit={formik.handleSubmit}>
        <div className="registration-block">
          {registrationFormFields.map(
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
              className="registration-form"
              disabled={
                Object.keys((formik.touched).length !== registrationFormFields.length
                || Object.keys(formik.touched).length !== 0)
                && Object.keys(formik.errors).length
              }
              type="submit"
            >
              Регистрация
            </Button>
            <Link to="/login" className="link">
              <Button variant="outlined" className="registration-form">
                Вход
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
