import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  DialogTitle,
  DialogContent,
  Dialog,
  TextField,
  Button,
  TextareaAutosize,
} from '@mui/material';
import { addNewsAction } from '../../store/actions';
import { addNewsSchema } from '../../utils/addnewsUtils';

import './styles.css';

const ModalForm = React.memo(function ModalForm() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const { id } = user;

  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      tags: '',
    },
    validationSchema: addNewsSchema,
    onSubmit: (values) => {
      dispatch(addNewsAction({ values, id }));
    },
  });

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  const addNewsFormFields = [
    { label: 'Заголовок', name: 'title' },
    { label: 'Текст', name: 'text' },
    { label: 'Теги', name: 'tags' },
  ];

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Добавить новость
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавьте новость</DialogTitle>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="dialog-content">
              {addNewsFormFields.map(({ label, name }) => (
                <>
                  {name === 'text' ? (
                    <TextareaAutosize
                      key={name}
                      className="text-area"
                      aria-label="Текст статьи"
                      placeholder="Введите текст"
                      name={name}
                      value={formik.values[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={!!(formik.touched[name] && formik.errors[name])}
                      helperText={formik.touched[name] && formik.errors[name]}
                    />
                  ) : (
                    <TextField
                      key={name}
                      id="outlined-basic"
                      label={label}
                      variant="outlined"
                      margin="dense"
                      name={name}
                      type="text"
                      value={formik.values[name]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={!!(formik.touched[name] && formik.errors[name])}
                      helperText={formik.touched[name] && formik.errors[name]}
                    />
                  )}
                </>
              ))}
            </div>
            <div>
              <Button
                disabled={
                  (Object.keys(formik.touched).length == 0
                  || Object.keys(
                    Object.keys(formik.touched).length !== addNewsFormFields.length
                    || Object.keys(formik.touched).length !== 0,
                  )) && Object.keys(formik.errors).length
                }
                type="submit"
              >
                Добавить
              </Button>
              <Button onClick={handleClose}>Выход</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default ModalForm;
