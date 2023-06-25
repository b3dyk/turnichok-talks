/* eslint-disable quotes */
import { useFormik } from 'formik';
import * as yup from 'yup';
import { SubmitInterface } from 'src/common/components/Popup/interfaces';
import { emailRegex } from 'src/common/variables';

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'не менше 3 символів')
    .required('Обов\'язкове поле')
    .trim(),
  phone: yup
    .string()
    .required('Обов\'язкове поле')
    .min(12, 'Введіть 9 символів')
    .trim(),
  email: yup
    .string()
    .required('Обов\'язкове поле')
    .trim()
    .matches(emailRegex, 'Некоректний формат email'),
  feedback: yup
    .string()
    .required('Обов\'язкове поле')
    .min(12, 'Введіть  не менше 12 символів')
    .trim(),
  file: yup.mixed().notRequired(),
});

export const useForm = (onSubmit: SubmitInterface) => {
  const form = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      feedback: '',
      file: null,
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  return form;
};
