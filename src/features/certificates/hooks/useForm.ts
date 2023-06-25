import { useFormik } from 'formik';
import * as yup from 'yup';
import { IValues, TSubmit } from '..';

const initialValues: IValues = {
  certificate: '',
};

const onSubmit: TSubmit = (
  values,
  actions
) => {
  console.log(values);
  actions.resetForm();
};


const validationSchema = yup.object({
  certificate: yup
    .string()
    .required('Обов\'язкове поле')
    .trim(),
});

export const useForm = () => useFormik({
  initialValues,
  validationSchema,
  onSubmit,
});
