import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_TRAIL = gql`
    mutation addTrail($profileId: ID!){
        addTrail(profileId: $profileId){
            token
            profile {
                _id
            }
        }
    }
    `;

export const REMOVE_TRAIL =gql`
mutation removeTrail($profileId: ID!){
    removeTrail(profileId: $profileId){
        token
        user {
            _id
        }
    }
}
`;