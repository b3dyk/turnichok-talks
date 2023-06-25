import {
  useMutation,
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
} from '@apollo/client';
import { ISubmitValues, ISubmitActions } from '../interfaces';

type GqlVariantType = DocumentNode | TypedDocumentNode<any, OperationVariables>;

export const useApollo = (gqlVariant: GqlVariantType) => {
  const [createCourseMutation] = useMutation(gqlVariant, {
    errorPolicy: 'ignore',
  });

  const onSubmit = (values: ISubmitValues, actions: ISubmitActions) => {
    createCourseMutation({
      variables: values,
    });
    actions.resetForm();
    alert('Данные отправленны');
  };
  return {
    onSubmit,
  };
};
