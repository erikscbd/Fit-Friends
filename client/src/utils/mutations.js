import { gql } from "@apollo/client";

export const ADD_FOOD_ENTRY = gql`
  mutation addFoodEntry($foodEntry: String!, $calorieEntry: Int) {
    addFoodEntry(foodEntry: $foodEntry, calorieEntry: $calorieEntry) {
      _id
      username
      foodEntry
      calorieEntry
    }
  }
`;

export const REMOVE_FOOD_ENTRY = gql`
  mutation removeFoodEntry($foodEntry: String!) {
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
  }
`;
export const ADD_WORKOUT = gql`
  mutation addWorkout($profileId: ID!, $workout: String!) {
    addWorkout(profileId: $profileId, workout: $workout) {
      _id
      username
      workouts
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addProfile(username: $username, email: $email, password: $password) {
      token
      profile {
        _id
        username
        email
      }
    }
  }
`;

export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($workout: String!) {
    removeWorkout(workout: $workout) {
      _id
      username
      workout
    }
  }
`;
