console.clear()
const mysql = require('mysql2/promise')

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

   return users
}

async function insertIntoUsers(userInfo){
   const conn = await connectToDataBase();
   const query = `INSERT INTO users (nome, idade, sexo) VALUES (?, ?, ?);`;
   const user_array = [userInfo.nome, userInfo.idade, userInfo.sexo];
   
   await conn.query(query, user_array);

   return 200
}

async function updateUsers(newUserInfo){
   const conn = await connectToDataBase();
   const query = `UPDATE users SET nome = ?, idade = ?, sexo = ? WHERE id = ?;`;
   const user_array = [newUserInfo.nome, newUserInfo.idade, newUserInfo.sexo, newUserInfo.id]

   await conn.query(query, user_array);
}

async function deleteUsers(id){
   const conn = await connectToDataBase();
   const query = `DELETE FROM users WHERE id = ?`
   const user_array = [id]

   await conn.query(query, user_array);
}

exports.selectUsers = selectUsers;
exports.updateUsers = updateUsers;
exports.deleteUsers = deleteUsers;
exports.insertIntoUsers = insertIntoUsers;
