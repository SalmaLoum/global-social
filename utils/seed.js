const connection = require('../config/connection')
const { User, Thought, Reaction } = require('../models')
const {
  getRandomUsers,
  getRandomThoughts,
  getRandomReactions,
} = require('./data')

connection.on('error', (err) => err)

connection.once('open', async () => {
  console.log('connected')
  await Thought.deleteMany({})
  await Reaction.deleteMany({})
  await User.deleteMany({})

  const users = []
  const thoughts = getRandomThoughts(10)
  const reactions = getRandomReactions(10)

  await User.collection.insertMany(users)
  await Thought.collection.insertMany(thought)
  await Reaction.collection.insertMany(reaction)

  // loop through the saved thoughts, for each thought we need to generate a thought and insert the reactions
  console.table(users)
  console.table(thoughts)
  console.table(reactions)
  console.info('Seeding complete! 🌱')
  process.exit(0)
})
