const { AuthenticationError } = require('apollo-server-express');
const { assertDirective } = require('graphql');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {


    Query: {

        // FIND ALL PROFILES

        profiles: async () => {
            return Profile.find();
        },

        // FIND A SINGLE PROFILE BY ID

        profile: async (parent, { profileId }) => {
            return Profile.findOne({ _id: profileId });
        },

        // FIND LOGGED IN USER'S PROFILE
        // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
        me: async (parent, args, context) => {
            if (context.user) {
                return Profile.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

    Mutation: {

        // ADD PROFILE

        addProfile: async (parent, { username, password , email }) => {
            const profile = await Profile.create({  username, password });
            const token = signToken(profile);

            return { token, profile };
        },

        // ALLOW LOGIN

        login: async (parent, { username, password }) => {
            const profile = await Profile.findOne({ username });

            if (!profile) {
                throw new AuthenticationError('No profile with this username found!');
            }

            const correctPw = await profile.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
            // If user is successfully logged in, they are assigned a JWT token 
            const token = signToken(profile);
            return { token, profile };
        },


        //ADD FOOD ENTRY
        addFoodEntry: async (parent, { profileId, foodType, calories }, context) => {
            if(context.user) {
                return Profile.findOneAndUpdate(
                    { _id: profileId },
                    { $addToSet: { foodEntries: { foodType, calories } } },
                    { new: true }
                );
            }
        },

        // ADD WORKOUT
        // Set up mutation so a logged in user can only add to their workout entry and no one else's
        // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
        addWorkout: async (parent, { profileId, workoutText }, context) => {
            if(context.user) {
                return Profile.findOneAndUpdate(
                    { _id: ProfileId },
                    { $addToSet: { workouts: { workoutText } } },
                    { new: true }
                );
            }
        },

        //DELETE PROFILE
        // Set up mutation so a logged in user can only remove their profile and no one else's
        deleteProfile: async (parent, { profileId }, context) => {
            if (context.user) {
                return Profile.findOneAndDelete({ _id: profileId });
            }
            // If user attempts to execute this mutation and isn't the user associated with the account, throw an error
            throw new AuthenticationError('You do not have authorization to update this information');
        },
        
        deleteFoodEntry: async (parent, { foodEntryId }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { foodEntries: { _id: foodEntryId } } },
                    { new: true }
                );
            }
            // If user attempts to execute this mutation and isn't the user associated with the account, throw an error
            throw new AuthenticationError('You do not have authorization to update this information');
        },

        deleteWorkout: async (parent, { workoutId }, context) => {
            if (context.user) {
                return Profile.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { workouts: { _id: workoutId } } },
                    { new: true }
                );
            }
            // If user attempts to execute this mutation and isn't the user associated with the account, throw an error
            throw new AuthenticationError('You do not have authorization to update this information');
        }

        

    },
};

module.exports = resolvers;
