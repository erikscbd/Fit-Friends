const { Schema, model } = require('mongoose').Schema;
const moment = require('moment');

const commentsSchema = new Schema(
    {
        commentId:{
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'Profile'
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdVal => moment(createdVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    })

const workoutSchema = new Schema({
    exercise: {
        type: String,
        required: true,
        unique: false,
        trim: false,
        minlength: 1,
        maxlength: 255
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdVal => moment(createdVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    comments: [commentsSchema],
})


const Workout = model('Workout', workoutSchema);
