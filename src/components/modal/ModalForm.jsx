import * as React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import {
  DialogTitle,
  DialogContent,
  Dialog,
  TextField,
  Button,
} from '@mui/material';

import { addNewsAction } from '../../store/actions';
import { addNewsSchema } from '../../utils/addnewsUtils';

import './styles.css';

function ModalForm() {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      tags: '',
    },
    validationSchema: addNewsSchema,
    onSubmit: (values) => {
      dispatch(addNewsAction(values));
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
              ))}
            </div>
            <div>
              <Button
                // disabled={
                //   Object.keys(
                //     formik.touched.length !== addNewsFormFields.length ||
                //       Object.keys(formik.touched).length !== 0
                //   ) && Object.keys(formik.errors).length
                // }
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
}

export default ModalForm;
