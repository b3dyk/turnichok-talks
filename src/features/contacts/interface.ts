import { FC } from 'react';
import { FormikHelpers } from 'formik/dist/types';

export interface ISubmitActions {
  resetForm: () => void;
}

export interface ISubmitValues {
  name?: string;
  email: string;
}

export interface IValues {
  name: string
  surname: string
  email: string
  phone: string
  comment: string
}

export type TSubmit = (
  values: IValues,
  actions: FormikHelpers<IValues>
) => void;

export interface IContactItem {
  id: number
  Icon: FC
  text: string
}
