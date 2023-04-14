// const multer = require('multer');
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
exports.getDishes = async(req, res, next) =>{
   try {
      
      let [dishes, a] = await Dish.getAllDish();
      // console.log(dishes);

      let [cusIngredientsDetached, b] = await Dish.getAllCusIngredient();
      // console.log(cusIngredientsDetached);

      let [filtersDetached, c] = await Dish.getAllDishFilter();
      // console.log(filtersDetached);
      
      let customIngredients=[];
      //combine and rearrange dishes according to their cusIngredients and filters
      dishes.forEach(dish => {
         cusIngredientsDetached.forEach((ing, index)=> {
            //pack/group all the ingredients which matches ing.id with dish.id
            if(dish.id === ing.id){
               customIngredients.push(ing);
            }
            //assign new property cusIngredient to with customIngredients  
         dish.cusIngredient = [...customIngredients];
         });
         //empth customIngredients array to reassign another dish ingredients
         customIngredients=[];

         filtersDetached.forEach(filter => {
            if(dish.id === filter.id){
               dish.filters = filter;
            }
         });
      });
      console.log("final dish");
      console.log(dishes);
      
      res.status(200).json(dishes);
   } catch (error) {
      console.log(error)
   }
}

// exports.uploadImage = (req, res, next) =>{
//    // use Multer
//    var storage = multer.diskStorage({
//       destination: function (req, file, cb) {
//         cb(null, '../../client/src/assets/dish_images/')
//       },
//       filename: function (req, file, cb) {
//         cb(null, file.originalname)
//       }
//   })
//   multer({ storage: storage }).single('image');

//  console.log(req.file);
//  var response = '<a href="/">Home</a><br>';
//  response += "Files uploaded successfully.<br>";
//  response += `<img src="${req.file.path}" /><br>`;
//  return res.send(response);
// }