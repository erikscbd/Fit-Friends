const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    username: String
    email: String
    password: String
    workouts: [Workout]
    foodEntries: [FoodEntries]
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

type Workout {
  id: ID!
  workoutText: String!
  
}

type FoodEntries {
  id: ID!
  foodType: String!
  calories: Int
}

input TransactionInput {
  price: Float
  method: String
  cardNumber: String
  items: [ID]
}

type Mutation {
  addProfile(username: String!, password: String!, email: String!) : Auth
  login(username: String!, password: String!) : Auth

  addFoodEntry(foodType: String!, calories: Int) : FoodEntries
  addWorkout(workoutText: String!) : Workout
}`


;

module.exports = typeDefs;
