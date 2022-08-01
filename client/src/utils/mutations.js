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
      username
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
export const ADD_WORKOUT = gql`
mutation addWorkout($profileId: ID!, $workout: String!) {
  addWorkout(profileId: $profileId, workout: $workout) {
    _id
    name
    workouts
  }
}
`;

export const REMOVE_WORKOUT = gql`
mutation removeWorkout($workout: String!) {
  removeWorkout(workout: $workout) {
    _id
    name
    workouts
  }
} 
`
