const express = require('express');
const postControllers = require('../controllers/PostControllers');
const dishControllers = require('../controllers/DishControllers');
const router = express.Router();

// @route Get and Post - /posts/
router
  .route("/ab")
  .get(postControllers.getAllUsers)
  .post(postControllers.createNewUser);

router
  .route("/insertdish")
  .post(dishControllers.addNewDish);

router.route("/a/:id").get(postControllers.getUserById);

module.exports = router;