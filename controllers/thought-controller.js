const { Thought, Reaction, User } = require('../models')

module.exports = {
  // Function to get all of the thoughts by invoking the find() method with no arguments.
  // Then we return the results as JSON, and catch any errors. Errors are sent as JSON with a message and a 500 status code
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },

  // Gets a single thought using the findOneAndUpdate method. We pass in the ID of the thought and then respond with it, or an error if not found
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought),
      )
      .catch((err) => res.status(500).json(err))
  },
  // Creates a new thought. Accepts a request body with the entire Thought object.
  // Because thoughts are associated with Users, we then update the User who created the app and add the ID of the thought to the thoughts array
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          // could use $push - add to set prevents duplicates
          { $addToSet: { thoughts: thought._id } },
          { new: true },
        )
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought created, but found no user with that ID',
            })
          : res.json('Created the thought 🎉'),
      )
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  // Updates a thought using the findOneAndUpdate method.
  //Uses ID, and the $set operator in mongodb to inject the request body. Enforces validation.
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true },
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought),
      )
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  // Removes a thought from the database. This method finds the thought based on ID.
  // It updates the thought array for the User.
  deleteThought(req, res) {
    Thought.findOneAndRemove({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtsId } },
              { new: true },
            ),
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought exists but no user with this id!',
            })
          : res.json({ message: 'Thought successfully deleted!' }),
      )
      .catch((err) => res.status(500).json(err))
  },
}
