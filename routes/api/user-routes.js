const router = require('express').Router()
const {
  getUsers,
  getSingleUser,
  createUser,
  //updateUser,
  deleteUser,
  //addFriend,
  //deleteFriend
} = require('../../controllers/userController')

// /api/users
router.route('/').get(getUsers).post(createUser)

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)

// /api/friends/:friendsId
router.route('/:userId/friends/:friendsId').put(addfriend).delete(deleteFriend)

module.exports = router