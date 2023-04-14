const Order = require('../models/Order');

exports.addNewOrder = async (req, res, next)=>{

   try {
      const orderObj = req.body;
      const order = new Order(orderObj);
      let result = await order.save();
      res.status(201).json({message: 'successfully posted order info'})
     
   } catch (error) {
      console.log(error);
      next(error);
   }

}
exports.getOrders = async (req, res, next)=>{
   try{
      let [ordersInfo, a] = await Order.getAllOrders();

      let [itemsInfo, b] = await Order.getAllOrderedItems();

      let items = []
      for (let i = 0; i < ordersInfo.length; i++) {
         itemsInfo.forEach(itemElement => {
            if(ordersInfo[i].order_id === itemElement.ordered_id){
               items.push(itemElement);
            }
         });
         ordersInfo[i].item = [...items];
         items = [];
      }
      
      console.log("getting all the ordered data from database");
      console.log(ordersInfo);
      res.status(200).json(ordersInfo);
   }catch(error){
      console.log(error);
      next(error);
   }
}