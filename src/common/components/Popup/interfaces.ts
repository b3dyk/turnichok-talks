export interface SubmitActionsInterface {
  resetForm: () => void;
}

export interface SubmitValuesInterface {
  name: string;
  phone: string;
  message?: string;
  email?: string;
  feedback?: string;
  file?: null | File;
}

export type SubmitInterface = (
  values: SubmitValuesInterface,
  actions: SubmitActionsInterface
) => void;
