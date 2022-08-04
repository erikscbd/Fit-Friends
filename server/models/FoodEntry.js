const { Schema, model } = require('mongoose');
const moment = require('moment');

const foodEntrySchema = new Schema(
    {

        calories: {
            type: Number,
            default: 0,
            ref: 'Food'
        },

        foodType: {
            type: String,
            ref: 'Food'
        }
    }


);






const foodEntry = model('FoodEntry', foodEntrySchema);

module.exports = foodEntry;
