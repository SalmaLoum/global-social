const { Reaction, Thought, User } = require('../models')

module.exports = {
  // Adds a reaction to a thought. This method is unique in that we add the entire body of the reaction rather than the ID with the mongodb $addToSet operator.
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true },
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought),
      )
      .catch((err) => res.status(500).json(err))
  },
  // Remove thought reaction. This method finds the thought based on ID. It then updates the reactions array associated with the thought in question by removing it's reactionId from the reactions array.
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true },
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought),
      )
      .catch((err) => res.status(500).json(err))
  },
}
