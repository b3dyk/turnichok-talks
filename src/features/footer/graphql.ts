import { gql } from '@apollo/client';

export const SEND_SUBSCRIPTION = gql`
  mutation Subscription($email: String!) {
    callback(email: $email)
  }
`;
