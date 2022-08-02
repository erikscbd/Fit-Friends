const { Schema, model } = require('mongoose');
const moment = require('moment');

const foodSchema = new Schema(
    {


        foodType: {
            type: String,
            required: true,
            max: 30

        },
        calories: {
            
            type: Number,
            required: true,

        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdVal => moment(createdVal).format('MMM DD, YYYY [at] hh:mm a')
        },

        // username: {
        //     type: String,
        //     required: true,
        // },
    }


);






const Food = model('Food', foodSchema);

module.exports = Food
    ;
