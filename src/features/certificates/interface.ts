import { FormikHelpers } from 'formik/dist/types';

export interface IValues {
  certificate: string
}

export type TSubmit = (
  values: IValues,
  actions: FormikHelpers<IValues>
) => void;
