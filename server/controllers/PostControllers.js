const User = require("../models/User");

exports.getAllUsers = async (req, res, next) =>{

   try {
      let [users, _] = await User.findAll();
      res.status(200).json({users});
   } catch (error) {
      console.log(error);
      next(error);
   }
};

exports.createNewUser = async (req, res, next) =>{

   try {
      const {name, email, password} = req.body;
      const newUser = new User(name, email, password);
   
      let result = await newUser.save();
      res.status(201).json({message:"Post created"});
   } catch (error) {
      console.log(error);
      next(error);
   }

}

exports.getUserById = async (req, res, next) =>{

   try {
      let userID = req.params.id;
      let [user, _] = await User.findById(userID);

      res.status(200).json({"user":user[0]})
   } catch (error) {
      console.log(error);
      next(error);
   }
   
}