import { gql } from "@apollo/client";

export const MUTATION_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        firstName
        lastName
        userName
        email
        password
      }
      token
    }
  }
`;

export const MUTATION_ADDUSER = gql`
  mutation Mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      token
      user {
        _id
        firstName
        lastName
        userName
        email
        password
      }
    }
  }
`;
