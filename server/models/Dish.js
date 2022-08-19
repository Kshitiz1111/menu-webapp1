const db = require("../config/DB");

class Dish{
   constructor(obj){
      this.id = obj.id;
      this.name = obj.name;
      this.price = obj.price;
      this.img = obj.img_src;
      this.base_ingredient = obj.baseIngredient;
      // custom ingredients
      this.cus_ings = []
      for (let index = 0; index < obj.customIngredient.length; index++) {
         
         this.cus_ings = [...this.cus_ings,
            {
               d_id: obj.id, 
               cus_ing_name: obj.customIngredient[index].name, 
               cus_ing_price: obj.customIngredient[index].price
            }
         ];
         
      }
      //filter
      this.f_d_id = obj.id;
      this.star = obj.filter.star;
      this.category = obj.filter.category;
      this.new = obj.filter.new; 
      this.veg = obj.filter.veg;
      this.signature = obj.filter.signature;
      this.country = obj.filter.country;
      this.method = obj.filter.method;
      this.metadata = obj.filter.metadata;
      console.log(this.new);
      console.log(obj.filter.new);
   }

   save(){
      let dish_sql = `
         INSERT INTO dish(
            id, 
            name, 
            price, 
            img, 
            base_ingredient
         ) 
         VALUES( 
            '${this.id}',
            '${this.name}',
            '${this.price}',
            '${this.img}',
            '${this.base_ingredient}'
         )
      `;
      db.execute(dish_sql);
      

      for (let index = 0; index < this.cus_ings.length; index++) {
         
         let cus_ing_sql = `
            INSERT INTO custom_ingredient(
               id,
               name,
               price
               
            ) 
            VALUES( 
               '${this.cus_ings[index].d_id}',
               '${this.cus_ings[index].cus_ing_name}',
               '${this.cus_ings[index].cus_ing_price}'
            )
         `
         db.execute(cus_ing_sql);
      }

      let filter_sql = `
         INSERT INTO filter(
            id,
            star,
            category,
            veg,
            new,
            signature,
            country,
            method,
            metadata
         )
         VALUES(
            '${this.f_d_id}',
            '${this.star}',
            '${this.category}',
            '${this.veg}',
            '${this.new}',
            '${this.signature}',
            '${this.country}',
            '${this.method}',
            '${this.metadata}'
         )

      `
      db.execute(filter_sql);
      
   }

   
}

module.exports = Dish;