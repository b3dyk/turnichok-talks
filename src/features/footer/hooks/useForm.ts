import { useFormik } from 'formik';
import * as yup from 'yup';
import { ISubmitValues, ISubmit } from '../interfaces';
import { emailRegex } from 'src/common/variables';

const initialValues: ISubmitValues = {
  email: '',
};

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Обов\'язкове поле')
    .trim()
    .matches(emailRegex, 'Некоректний формат email'),
});

export const useForm = (onSubmit: ISubmit) => {
  const form = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return form;
};
