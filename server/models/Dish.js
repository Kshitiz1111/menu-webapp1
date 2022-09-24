const db = require("../config/DB");

class Dish{

   objArr = [];
   constructor(obj){

     let CIngredient = [

     ];
     let a = [];
      for (let x = 0; x < obj.length; x++) {
        
         for (let index = 0; index < obj[x].customIngredient.length; index++) {
         
            a = [...a,
               {
                  d_id: obj[x].id, 
                  cus_ing_name: obj[x].customIngredient[index].name, 
                  cus_ing_price: obj[x].customIngredient[index].price
               }
            ];
         
         } 
         CIngredient.push(a);
         a = [];
          
      }
      
     

      for (let x = 0; x < obj.length; x++) {
         this.objArr[x] = {
            id: obj[x].id,
            name: obj[x].name,
            price: obj[x].price,
            img: obj[x].img_src,
            base_ingredient: obj[x].baseIngredient,
            cus_ings: CIngredient[x],
            //filter
            f_d_id: obj[x].id,
            star: obj[x].filter.star,
            category: obj[x].filter.category,
            new: obj[x].filter.new,
            veg: obj[x].filter.veg,
            signature: obj[x].filter.signature,
            country: obj[x].filter.country,
            method: obj[x].filter.method,
            metadata: obj[x].filter.metadata
         }

      }
      // this.objArr = obj;
   };

   save(){
      console.log("form server");
      console.log(this.objArr);
      for (let x = 0; x < this.objArr.length; x++) {
        
         let dish_sql = `
            INSERT INTO dish(
               id, 
               name, 
               price, 
               img, 
               base_ingredient
            ) 
            VALUES( 
               '${this.objArr[x].id}',
               '${this.objArr[x].name}',
               '${this.objArr[x].price}',
               '${this.objArr[x].img}',
               '${this.objArr[x].base_ingredient}'
            )
         `;

      db.execute(dish_sql);

         for (let index = 0; index < this.objArr[x].cus_ings.length; index++) {
               
            let cus_ing_sql = `
               INSERT INTO custom_ingredient(
                  id,
                  name,
                  price 
               ) 
               VALUES( 
                  '${this.objArr[x].cus_ings[index].d_id}',
                  '${this.objArr[x].cus_ings[index].cus_ing_name}',
                  '${this.objArr[x].cus_ings[index].cus_ing_price}'
               )
            `
            db.execute(cus_ing_sql);
         }
      }

      // for (let x = 0; x < this.objArr.length; x++) {
        
      // }
      for (let x = 0; x < this.objArr.length; x++) {
         
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
               '${this.objArr[x].f_d_id}',
               '${this.objArr[x].star}',
               '${this.objArr[x].category}',
               '${this.objArr[x].veg}',
               '${this.objArr[x].new}',
               '${this.objArr[x].signature}',
               '${this.objArr[x].country}',
               '${this.objArr[x].method}',
               '${this.objArr[x].metadata}'
            )

         `
      db.execute(filter_sql);
      }

   }

  static getAllDish(){
      let sql = 'SELECT * FROM dish';

      return db.query(sql);
   }
}

module.exports = Dish;