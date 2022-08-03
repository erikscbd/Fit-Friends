import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation addProfile ($username: String!, $password: String!) {
  addProfile(username: $username, password: $password) {
    token
    profile {
      _id
    }
  }
}`;


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
      username
      foodEntries
    }
  }
`;

export const LOGIN_USER = gql`
mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    profile {
      _id
    }
  }
}`;
export const ADD_WORKOUT = gql`
mutation addWorkout($profileId: ID!, $workout: String!) {
  addWorkout(profileId: $profileId, workout: $workout) {
    _id
    name
    workouts
  }
}
`;


