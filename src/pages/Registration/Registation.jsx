import React from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import Header from '../../components/Header/Header';
import { addUserAction } from '../../store/actions';
import { registrValidationSchema } from '../../utils/validationUtils';

import './style.css';

function Registration() {
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
    registrValidationSchema,
    onSubmit: (values) => {
      dispatch(addUserAction(values));
    },
  });

  const registrFormFields = [
    { label: 'Login', name: 'login', type: 'text' },
    { label: 'Name', name: 'firstName', type: 'text' },
    { label: 'Last Name', name: 'lastName', type: 'text' },
    { label: 'Password', name: 'password', type: 'password' },
    { label: 'Repeat the password', name: 'confirmPassword', type: 'password' },
    { label: 'Email', name: 'email', type: 'email' },
  ];

  return (
    <div>
      <Header />
      <form onSubmit={formik.handleSubmit}>
        <div className="registr">
          {registrFormFields.map(({ label, name, type }) => (
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
          ))}
          <div>
            <Button
              variant="outlined"
              className="registration-form"
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
