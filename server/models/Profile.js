const { Schema, model } = require('mongoose');


const profileSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        min: 7,
        max: 15,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        unique: true,
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile'
        }
    ],

    workouts:[
    {
        type: String,
        ref: 'Workout'
    }],

    foodEntries: [{
        type: Object,
        ref: 'Food'
    }],

});


profileSchema.virtual('friendCount').get(function () {
    return this.friends?.length;
});

profileSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

profileSchema.method.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const Profile = model('Profile', profileSchema);


module.exports = Profile;