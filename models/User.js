const { Schema, model } = require('mongoose')

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      // match: [
      //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      //   "Incorrect email format",
      // ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  },
)

// Create a virtual property `friendNumber` that gets and sets the user's number of friends
userSchema
  .virtual('friendNumber')
  // Getter
  .get(function () {
    return this.friends.length
  })

// Initialize our User model
const User = model('user', userSchema)

module.exports = User
