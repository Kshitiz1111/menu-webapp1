const db = require('../config/DB');

class Order{

   itemsObj = [];
   orderInfo = [];
   constructor(obj){
      this.orderInfo.order_id = obj.orderId;
      this.orderInfo.client_id = obj.clientId;
      this.orderInfo.table_on = obj.tableNumber;
      this.orderInfo.total_item = obj.totalItems;
      this.orderInfo.total_price = obj.FinalPrice;
      this.orderInfo.timestamp = obj.timestamp;

      for(let i = 0; i < obj.totalItems; i++){
         //arrange extra ingredient
         let extraIngredients = [];
         for(let j = 0; j < obj.Items[i].extraIngs.length; j++ ){
            extraIngredients = [...extraIngredients, `${obj.Items[i].extraIngs[j].c}x ${obj.Items[i].extraIngs[j].name}`];
         }

         this.itemsObj[i] = [
            {
               item_id: obj.Items[i].itemId,
               item_name: obj.Items[i].name,
               remove_ings: obj.Items[i].removeIngs.toString(),
               extra_ings: extraIngredients.toString(),
               type: obj.Items[i].type,
               cook_time: obj.Items[i].cooktime,
               quantity: obj.Items[i].quantity,
               price: obj.Items[i].itemPrice,
               // ordered_id: ,
               order_item_id: `${obj.orderId}${obj.Items[i].item_id}`,
            }
         ]
      }
      console.log(this.itemsObj);
   }

   save(){
      // let orderInfo_sql = `
      //    INSERT INTO orders(
      //       order_id,
      //       client_id,
      //       table_no,
      //       total_item,
      //       total_price,
      //       timestamp
      //    )
      //    VALUES(
      //       '${this.orderInfo.order_id}',
      //       '${this.orderInfo.client_id}',
      //       '${this.orderInfo.table_no}',
      //       '${this.orderInfo.total_item}',
      //       '${this.orderInfo.total_price}',
      //       '${this.orderInfo.timestamp}'
      //    )
      // `;
      // db.execute(orderInfo_sql);

      for(let i = 0; i < this.orderInfo.totalItems; i++){
         let itemInfo_sql = `
            INSERT INTO ordered_items(
               item_id,
               item_name,
               remove_ings,
               extra_ings,
               type,
               cook_time,
               quantity,
               price,
               order_item_id 
            )
            VALUES(
               '${this.itemsObj[i].item_id}',
               '${this.itemsObj[i].item_name}',
               '${this.itemsObj[i].remove_ings}',
               '${this.itemsObj[i].extra_ings}',
               '${this.itemsObj[i].type}',
               '${this.itemsObj[i].cook_time}',
               '${this.itemsObj[i].quantity}',
               '${this.itemsObj[i].price}',
               '${this.itemsObj[i].order_item_id}',
            )
         `
         db.execute(itemInfo_sql);
      }
   }
}

module.exports = Order;