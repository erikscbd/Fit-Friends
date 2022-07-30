import { gql } from '@apollo/client';

export const ADD_FOOD_ENTRY = gql`
  mutation addFoodEntry($foodEntry: String!) {
    addFoodEntry(foodEntry: $foodEntry) {
      _id
      username
      foodEntry
    }
  }
`;

export const REMOVE_FOOD_ENTRY = gql`
  mutation removeFoodEntry ($foodEntry: String!) {
    removeFoodEntry(foodEntry: $foodEntry) {
      _id
      name
      foodEntries
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $username: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      _id
      name
    }
  }
}`;