import * as Yup from 'yup';

export const addNewsSchema = Yup.object({
  title: Yup.string().required('Поле не может быть пустым'),
  text: Yup.string().required('Поле не может быть пустым'),
  tags: Yup.string().required('Поле не может быть пустым'),
});
