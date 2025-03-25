import { gql } from '@apollo/client';

// Consulta para obter lista de usuários
export const GET_USER_LIST = gql`
  query GetUserList {
    users(limit: 50, offset: 0, orderBy: "first_name", direction: "asc") {
      id
      firstName
      lastName
      email
      document
      role
    }
  }
`;

// Mutação para criar um usuário
export const CREATE_USER = gql`
  mutation CreateUser(
    $document: String!,
    $email: String!,
    $firstName: String!,
    $lastName: String!,
    $role: String!,
    $password: String!
  ) {
    createUser(
      document: $document,
      email: $email,
      firstName: $firstName,
      lastName: $lastName,
      role: $role,
      password: $password
    ) {
      id
      document
      email
      firstName
      lastName
      role
    }
  }
`;

// Mutação para atualizar um usuário
export const UPDATE_USER = gql`
 mutation UpdateUser(
  $id: ID!,
  $document: String,
  $email: String,
  $firstName: String,
  $lastName: String,
  $role: String
) {
  updateUser(
    id: $id,
    document: $document,
    email: $email,
    firstName: $firstName,
    lastName: $lastName,
    role: $role
  ) {
    id
    document
    email
    firstName
    lastName
    role
  }
}

`;
// Mutação para deletar um usuário
export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      message
    }
  }
`;

// Mutação para login
export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    me {
      id
      firstName
      lastName
      email
      document
      role
    }
}`;
