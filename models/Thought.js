const { Schema, model } = require('mongoose')
const reactionSchema = require('./Reaction')
const dateFormat = require('../utils/dateFormat')

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 500,
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

// Create a virtual property `getTags` that gets the amount of tags associated with an application
thoughtSchema
  .virtual('getResponses')
  // Getter
  .get(function () {
    return this.tags.length
  })

// Initialize our Application model
const Thought = model('thought', thoughtSchema)

module.exports = Thought
