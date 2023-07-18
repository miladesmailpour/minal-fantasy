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
query User($userNameOrEmail: String!) {
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

export const QUERY_GET_MATRIX = gql`
query Matrix {
  getMatrix {
    reward
    threat
    adjacentThreat
    adjacentReward
    revealed
    flagged
  }
}
`;

export const QUERY_PRINT_MATRIX = gql`
query Matrix($matrix: [[MatrixInput]]) {
  printMatrix(matrix: $matrix)
}
`;