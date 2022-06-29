import React, { useState, useMemo } from 'react';
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

import AddPictures from '../AddPictures/AddPictures';
import { addNewsAction } from '../../store/actions';
import { addNewsSchema } from '../../utils/validationUtils';

import './styles.css';

const AddNewsModal = React.memo(function AddNewsModal() {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.authReducer.user);

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');

  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      tags: '',
    },
    validationSchema: addNewsSchema,
    onSubmit: (values) => {
      dispatch(addNewsAction({ image, values, id }));
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  const addNewsFormFields = [
    { label: 'Заголовок', name: 'title' },
    { label: 'Текст', name: 'text' },
    { label: 'Теги', name: 'tags' },
  ];

  const isDisabled = useMemo(() => {
    return !!(
      (Object.keys(formik.touched).length == 0
        || Object.keys(
          Object.keys(formik.touched).length !== addNewsFormFields.length
            || Object.keys(formik.touched).length !== 0,
        ))
        && Object.keys(formik.errors).length
    );
  }, [Object.keys(formik.touched), Object.keys(formik.errors)]);

  console.log(isDisabled);

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
              <AddPictures setFile={setImage} />
              {addNewsFormFields.map(({ label, name }) =>
                name === 'text' ? (
                  <TextareaAutosize
                    key={name}
                    className="text-area"
                    placeholder="Введите текст"
                    name={name}
                    value={formik.values[name]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                ) : (
                  <TextField
                    key={name}
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
                ))}
            </div>
            <div>
              <Button disabled={isDisabled} type="submit">
                Добавить
              </Button>
              <Button onClick={handleClose}>Отменить</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
});

export default AddNewsModal;
