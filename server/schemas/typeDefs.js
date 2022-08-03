<<<<<<< HEAD
const { gql } = require("apollo-server-express");
=======
const { gql } = require('apollo-server-express');
>>>>>>> 9ac9f96030e5d2e55a0f86ec87b9abe5db562f96

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    username: String
    email: String
    password: String
    workouts: [String]!
    foodEntries:
        {
            foodType: [String]!
            calories: [Number]
  }
}
<<<<<<< HEAD
=======

>>>>>>> 9ac9f96030e5d2e55a0f86ec87b9abe5db562f96
  type Auth {
    token: ID!
    profile: Profile
  }
<<<<<<< HEAD
=======

>>>>>>> 9ac9f96030e5d2e55a0f86ec87b9abe5db562f96
  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }
<<<<<<< HEAD
  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addFoodEntry(profile: ID, foodEntry: String): Profile
    addWorkout(profileId: ID!, workout: String!): Profile
=======

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth

    addFoodEntry(profile: ID, foodEntry: String): Profile
    addWorkout(profileId: ID!, workout: String!): Profile

>>>>>>> 9ac9f96030e5d2e55a0f86ec87b9abe5db562f96
    removeProfile: Profile
    removeFoodEntry(foodEntry: String!): Profile
    removeWorkout(workout: String!): Profile
  }
`;

<<<<<<< HEAD
module.exports = typeDefs;
=======
module.exports = typeDefs;
>>>>>>> 9ac9f96030e5d2e55a0f86ec87b9abe5db562f96
