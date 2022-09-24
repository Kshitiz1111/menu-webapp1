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
      
   let [dishes, _] = await Dish.getAllDish();
   console.log(dishes);
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