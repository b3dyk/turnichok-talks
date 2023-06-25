import { useFormik } from 'formik';
import * as yup from 'yup';
import { IValues, TSubmit } from '..';
import { emailRegex } from 'src/common/variables';

const initialValues: IValues = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  comment: '',
};

const onSubmit: TSubmit = (
  values,
  actions
) => {
  console.log(values);
  actions.resetForm();
};


const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'не менше 3 символів')
    .required('Обов\'язкове поле')
    .trim(),
  surname: yup
    .string()
    .min(3, 'не менше 3 символів')
    .trim(),
  email: yup
    .string()
    .required('Обов\'язкове поле')
    .trim()
    .matches(emailRegex, 'Некоректний формат email'),
  phone: yup
    .string()
    .required('Обов\'язкове поле')
    .min(12, 'Введіть 9 символів')
    .trim(),
  comment: yup
    .string()
    .min(3, 'не менше 3 символів')
    .required('Обов\'язкове поле')
    .trim(),
});

export const useForm = () => useFormik({
  initialValues,
  validationSchema,
  onSubmit,
});
