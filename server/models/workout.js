const { Schema, model} = require('mongoose');
const moment = require('moment');

const workoutSchema = new Schema(
    {
        workoutText: {
            type: String,
            required: true,
            max: 100,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdVal => moment(createdVal).format('MMM DD, YYYY [at] hh:mm a')
        },

        username: {
            type: String,
            required: true,
        },

    }
);

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
