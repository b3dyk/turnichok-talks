import { gql } from '@apollo/client';

export const SEND_CALLBACK_MUTATION = gql`
  mutation Callback($phone: String!, $name: String!, $message: String!) {
    callback(phone: $phone, name: $name, message: $message)
  }
`;
