const Dish = require("../models/Dish");

exports.addNewDish = async (req, res, next) =>{
   try {
      let reqObj = req.body;
      let dish = new Dish(reqObj);
      
      let result = await dish.save();
      res.status(201).json({message: "added new Dish successfully"});
   } catch (error) {
      console.log(error);
      next(error);
   }
}