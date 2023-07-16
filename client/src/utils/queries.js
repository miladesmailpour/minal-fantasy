import {gql} from "@apollo/client";

export const QUERY_USERS = gql`
query Users {
    users {
      _id
      firstName
      lastName
      userName
      email
      password
    }
  }
`;

export const QUERY_USERNAMEorEMAIL = gql`
query Query($userNameOrEmail: String!) {
    getByEmailUserName(userNameOrEmail: $userNameOrEmail) {
      _id
      firstName
      lastName
      userName
      email
      password
    }
  }
`;