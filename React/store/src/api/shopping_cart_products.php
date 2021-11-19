<?php

include_once './shopping_cart_products.php';

class ShoppingCartProducts extends ConnectDataBase{
   public function showProducts(){
      $sqlQuery = "SELECT product_id FROM shopping_cart";

      $connectDB = $this->connect_db()->prepare($sqlQuery)->execute();
   }
}