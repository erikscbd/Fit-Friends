const { Schema, model } = require('mongoose');


const profileSchema = new Schema({
    name: { 
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Profile'
        }
    ],
    workouts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Workout'
        }
    ],
    calories: {
        type: Number,
        default: 0
    }

});


profileSchema.virtual('friendCount').get(function() {
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