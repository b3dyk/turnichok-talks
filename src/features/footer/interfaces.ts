export interface ISubmitValues {
  email: string;
}

export interface ISubmitActions {
  resetForm: () => void;
}

export type ISubmit = (
  values: ISubmitValues,
  actions: ISubmitActions
) => void;
