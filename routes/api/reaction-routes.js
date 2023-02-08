const router = require('express').Router()

const {
  addReaction,
  removeReaction,
} = require('../../controllers/reaction-controller')

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').put(addReaction)

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)

module.exports = router
