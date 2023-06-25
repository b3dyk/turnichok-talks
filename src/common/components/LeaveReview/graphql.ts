import { gql } from '@apollo/client';

export const SEND_REVIEW_MUTATION = gql`
  mutation Review(
    $phone: String!
    $name: String!
    $feedback: String!
    $email: String!
    $file: Upload
  ) {
    callback(
      phone: $phone
      name: $name
      feedback: $feedback
      email: $email
      file: $file
    )
  }
`;
