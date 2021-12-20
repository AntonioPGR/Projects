console.clear()

// configurações do banco de dados
const dbConfig = {
   host: 'localhost',
   user: 'root',
   password: '050406DataBase',
   port: 3306,
   database: 'testes',
} 

async function connectToDataBase(){
   if(global.connection !== undefined){
      return global.connection
   }

   const mysql = require('mysql2/promise')
   const connection = await mysql.createConnection(dbConfig)
   global.connection = connection
   return connection
}

// seleciona os usuarios e retorna um array com eles 
async function selectUsers(conditions=null){
   const conn = await connectToDataBase();
   const query = conditions ? `SELECT * FROM users WHERE ${conditions}` : "SELECT * FROM users";

   const response = await conn.query(query)
   const users = response[0]

   console.log(users)
}

async function insertIntoUsers(userInfo){
   const conn = await connectToDataBase();
   const query = `INSERT INTO users (nome, idade, sexo) VALUES (?, ?, ?);`;
   const user_array = [userInfo.nome, userInfo.idade, userInfo.sexo];
   
   await conn.query(query, user_array);
}

async function updateUsers(id, newUserInfo){
   const conn = await connectToDataBase();
   const query = `UPDATE users SET nome = ?, idade = ?, sexo = ? WHERE id = ?;`;
   const user_array = [newUserInfo.nome, newUserInfo.idade, newUserInfo.sexo, id]

   await conn.query(query, user_array);
}

async function deleteUsers(id){
   const conn = await connectToDataBase();
   const query = `DELETE FROM users WHERE id = ?`
   const user_array = [id]

   await conn.query(query, user_array);
}
