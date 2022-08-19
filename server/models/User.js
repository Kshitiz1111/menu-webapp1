const db = require("../config/DB");

class User{
   constructor(name, email, password){
      this.name = name;
      this.email = email;
      this.password = password;
   }

    save(){
      let sql = `
         INSERT INTO user(
            name,
            email,
            password
         )
         VALUES(
            '${this.name}',
            '${this.email}',
            '${this.password}'
         )
      `;

      const [newUser, _] = db.execute(sql);

      return newUser;
   }

   static findAll(){
      let sql = "SELECT * FROM user";

      return db.execute(sql);
   }

   static findById(id){
      let sql = `SELECT * FROM user WHERE id = '${id}'`;
      
      return db.execute(sql);
   }
}

module.exports = User;