const express = require('express');
const postControllers = require('../controllers/PostControllers');
const dishControllers = require('../controllers/DishControllers');
const orderControllers = require('../controllers/OrderControllers');
const router = express.Router();

// @route Get and Post - /posts/
router
  .route("/ab")
  .get(postControllers.getAllUsers)
  .post(postControllers.createNewUser);
router.route("/a/:id")
  .get(postControllers.getUserById);

router
  .route("/insertdish")
  .get(dishControllers.getDishes)
  .post(dishControllers.addNewDish);
// router
//   .route("/uploadimage")
//   .post(dishControllers.uploadImage);

router
  .route("/order")
  .post(orderControllers.addNewOrder)
  .get(orderControllers.getOrders);
module.exports = router;