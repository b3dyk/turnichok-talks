import { DocumentNode, OperationVariables, TypedDocumentNode } from '@apollo/client';
import { SubmitActionsInterface, SubmitValuesInterface } from 'src/common/components/Popup/interfaces';

type GqlVariantType = DocumentNode | TypedDocumentNode<any, OperationVariables>;
type CloseFuncType = () => void;

export const useApollo = (
  onClose: CloseFuncType,
  gqlVariant: GqlVariantType
) => {
  // const [createCourseMutation] = useMutation(gqlVariant, {
  //   errorPolicy: 'ignore',
  // });

  const onSubmit = (
    values: SubmitValuesInterface,
    actions: SubmitActionsInterface
  ) => {
    // createCourseMutation({
    //   variables: values,
    // });
    console.log('values::', values);
    actions.resetForm();
    // alert('Данные отправленны');
    onClose();
  };

  return {
    onSubmit,
  };
};
