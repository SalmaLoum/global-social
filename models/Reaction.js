const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

// Schema to create Post model
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
})

// Create a virtual property `geReaction` that gets the amount of reactions
reactionSchema
  .virtual('getReaction')
  // Getter
  .get(function () {
    return this.reactions.length
  })

// Initialize our Reaction model
const Reaction = model('reaction', reactionSchema)

module.exports = Reaction
