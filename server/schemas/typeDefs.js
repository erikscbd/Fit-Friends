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
  workoutTime: Int
  
}

type FoodEntries {
  id: ID!
  foodType: String!
  calories: Int
}

input FoodEntryInput {
  foodType: String!
  calories: Int
}

input WorkoutInput {
  workoutText: String!
  workoutTime: Int
}


type Mutation {
  addProfile(username: String!, password: String!) : Auth
  login(username: String!, password: String!) : Auth

  addFoodEntry(foodEntry: FoodEntryInput) : FoodEntries
  addWorkout(workout: WorkoutInput) : Workout
}`


;

module.exports = typeDefs;
