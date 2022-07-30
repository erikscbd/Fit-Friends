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