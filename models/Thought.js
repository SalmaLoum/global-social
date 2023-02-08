const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')
const dateFormat = require('../utils/dateFormat')

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reations: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  },
)

// Create a virtual property `getThoughts` that gets the amount of thoughts
thoughtSchema
  .virtual('getThoughts')
  // Getter
  .get(function () {
    return this.thought.length
  })

// Initialize our Thought model
const Thought = model('thought', thoughtSchema)

module.exports = Thought
