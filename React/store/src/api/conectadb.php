<?php

class ConnectDataBase {
   public function connect_db(){
      try {
         $pdo = new PDO("mysql:host=localhost;dbname=web_store1", "root", "");
         return $pdo;
      } catch (PDOException $error) {
         return $error;
      }
   }   
}