const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [String]!
    foodEntries: 
}

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth

    addFoodEntry(profile: ID, foodEntry: String): Profile
    addWorkout(profileId: ID!, workout: String!): Profile

    removeProfile: Profile
    removeFoodEntry(foodEntry: String!): Profile
    removeWorkout(workout: String!): Profile
  }
`;

module.exports = typeDefs;