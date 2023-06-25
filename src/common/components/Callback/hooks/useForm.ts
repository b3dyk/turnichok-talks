import { useFormik } from 'formik';
import * as yup from 'yup';
import { SubmitInterface } from '../../Popup';

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
  message: yup.string().trim(),
});

export const useForm = (onSubmit: SubmitInterface) => {
  const form = useFormik({
    initialValues: {
      name: '',
      phone: '',
      message: '',
    },
    validationSchema,
    onSubmit,
  });

  return form;
};
