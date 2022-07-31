const { gql } = require('apollo-server-express');

const typeDefs = gql`


    type Profile {
        _id: ID
        name: String
        email: String
        calories: Int
        friends: [Profile]
    }

    type Query {
        getProfiles: [Profile]
        getProfile(profileId: ID) Profile
    }

    type Mutation {
        addProfile(name: String!, email: String!, password: String!:) Auth
        login(email: String!, password: String!): Auth

        addSkill(profileId: ID!, skill: String!): Profile
        removeProfile: Profile
        removeSkill(skill: String!): Profile
    }
`;

module.exports = typeDefs;