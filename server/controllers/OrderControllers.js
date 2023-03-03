const Order = require('../models/Order');

exports.addNewOrder = async (req, res, next)=>{

   try {
      const orderObj = req.body;
      const order = new Order(orderObj);
      let result = await order.save();
      if(!result){
         console.log("*******");
      }
      res.status(201).json({message: 'successfully posted order info'})
     
   } catch (error) {
      console.log(error);
      next(error);
   }

}