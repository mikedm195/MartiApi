import * as mysql from 'mysql';

import { _ } from 'underscore'

import { SqlRepository } from "../repository/SqlRepository";
import { Cart } from "../models/Cart";
import { Category } from "../models/Category";
import { Order } from "../models/Order";
import { OrderDetail } from "../models/OrderDetail";
import { Photo } from "../models/Photo";
import { Product } from "../models/Product";
import { Seller } from '../models/Seller';
import { User } from '../models/User';

import { CartMapper } from "./mapper/sql/CartMapper";
import { CategoryMapper } from "./mapper/sql/CategoryMapper";
import { PhotoMapper } from "./mapper/sql/PhotoMapper";
import { ProductMapper } from "./mapper/sql/ProductMapper";
import { SellerMapper } from "./mapper/sql/SellerMapper";
import { UserMapper } from "./mapper/sql/UserMapper";

export class SqlSource implements SqlRepository {

  sql;

  constructor() {

    this.sql = mysql.createConnection({
      // host: "ubiquitous.csf.itesm.mx",
      // user: "1015019_user",
      // password: "1015019",
      // database: "pddm_1015019",
      user: "root",
      password: "Mike1995.",
      database: "Marti",
      multipleStatements: true
    });
  }

  isUserAuth(email: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT user_id, rol " +
        "FROM Users " +
        "WHERE email = '" + email + "' " +
        "AND password = '" + password + "';";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          var mapper = new UserMapper();
          var res = mapper.transformList(result);   
          resolve(res[0]);
        } else resolve(null);
      });
    });
  }

  saveUser(user: User): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO Users " +        
        "(user_id, email, password, name, last_name,  gender, height, weight, address, rol) " +
        "VALUES(" +
        "'" + user.id + "', " +
        "'" + user.email + "', " +
        "'" + user.password + "', " +
        "'" + user.name + "', " +
        "'" + user.last_name + "', " +
        "'" + user.gender + "', " +
        "'" + user.height + "', " +
        "'" + user.weight + "', " +
        "'" + user.address + "', " +
        "'" + user.rol + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }

  setUser(user: User): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "UPDATE Users " +
        "SET email = '" + user.email + "', " +
        "password = '" + user.password + "', " +
        "name = '" + user.name + "', " +
        "last_name = '" + user.last_name + "', " +
        "gender = '" + user.gender + "', " +
        "height = '" + user.height + "', " +
        "weight = '" + user.weight + "', " +
        "address = '" + user.address + "', " +
        "rol = '" + user.rol + "' " +
        "WHERE user_id = '" + user.id + "'; " +
        "SET foreign_key_checks = 1;";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  getUserDetails(userId: number): Promise<User> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Users " +
        "WHERE user_id = " + userId;

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          var mapper = new UserMapper();
          var res = mapper.transformList(result);
          resolve(res[0]);
        } else resolve(null);
      });
    });
  }

  deleteUser(userId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "DELETE FROM Users " +
        "WHERE user_id = " + userId + ";" +
        "SET foreign_key_checks = 1; ";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  saveProduct(product: Product): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO Products " +
        "(product_id, category_id, name, photo, video, price, color, age) " +
        "VALUES(" +
        "'" + product.id + "', " +
        "'" + product.category_id + "', " +
        "'" + product.name + "', " +
        "'" + product.photo + "', " +
        "'" + product.video + "', " +
        "'" + product.price + "', " +
        "'" + product.color + "', " +
        "'" + product.age + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }

  setProduct(product: Product): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "UPDATE Products " +
        "SET category_id = '" + product.category_id + "', " +
        "name = '" + product.name + "', " +
        "photo = '" + product.photo + "', " +
        "video = '" + product.video + "', " +
        "price = '" + product.price + "', " +
        "color = '" + product.color + "', " +
        "age = '" + product.age + "' " +
        "WHERE product_id = '" + product.id + "'; " +
        "SET foreign_key_checks = 1;";

      // console.log(JSON.stringify(product, null, "\t"));
      // console.log(query);
      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  getProductDetails(productId: number): Promise<Product> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Products " +
        "WHERE product_id = " + productId;

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {          
          var mapper = new ProductMapper();
          var res = mapper.transformList(result);          
          resolve(res[0]);
        } else resolve(null);
      });
    });
  }

  getProductList(categoryId: number, color: string, age: string): Promise<Product[]> {
    return new Promise((resolve, reject) => {      
      var whereQuery = null;
      var query =
        "SELECT * " +
        "FROM Products ";        

      if(categoryId)
        whereQuery = "WHERE category_id = " + categoryId + " ";
      if(color)
        if(!whereQuery)
          whereQuery = "WHERE color = '" + color + "' ";
        else
          whereQuery += " AND color = '" + color + "' ";
      if(age)
        if(!whereQuery)
          whereQuery = "WHERE age = '" + age + "' ";
        else
          whereQuery += " AND age = '" + age + "' ";

      if(whereQuery)
        query+=whereQuery;
      query+="ORDER BY RAND();";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          var mapper = new ProductMapper();
          var res = mapper.transformList(result);
          resolve(res);
        } else resolve([]);
      });
    });
  }

  deleteProduct(productId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "DELETE FROM Products " +
        "WHERE product_id = " + productId + ";" +
        "SET foreign_key_checks = 1; ";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  saveCart(cart: Cart): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO Carts " +
        "(user_id, product_id, quantity, size) " +
        "VALUES(" +
        "'" + cart.user_id + "', " +
        "'" + cart.product_id + "', " +
        "'" + cart.quantity + "', " +        
        "'" + cart.size + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }

  setCart(cart: Cart): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "UPDATE Carts " +
        "SET product_id = '" + cart.product_id + "', " +
        "quantity = '" + cart.quantity + "', " +        
        "size = '" + cart.size + "' " +
        "WHERE user_id = '" + cart.user_id + "'; " +
        "SET foreign_key_checks = 1;";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  getCartDetails(userId: number, productId: number): Promise<Cart> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Carts c " +
        "LEFT JOIN Products p ON c.product_id = p.product_id " +
        "WHERE user_id = " + userId + " AND p.product_id = " + productId +";";
      
      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          var mapper = new CartMapper();
          var res = mapper.transformList(result);
          resolve(res[0]);
        } else resolve(null);
      });
    });
  }

  getCartList(userId: number): Promise<Cart[]> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Carts c " +
        "LEFT JOIN Products p ON c.product_id = p.product_id " +
        "WHERE user_id = " + userId;

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          var mapper = new CartMapper();
          var res = mapper.transformList(result);
          resolve(res);
        } else resolve(null);
      });
    });
  }

  deleteCart(userId: number, productId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "DELETE FROM Carts " +
        "WHERE user_id = " + userId + 
        ((productId) ? " AND product_id = " + productId : "") 
        + ";" +
        "SET foreign_key_checks = 1; ";        

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  saveCategory(category: Category): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO Categories " +
        "(category_id, name, description) " +
        "VALUES(" +
        "'" + category.id + "', " +
        "'" + category.name + "', " +
        "'" + category.description + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }

  setCategory(category: Category): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "UPDATE Categories " +
        "SET name = '" + category.name + "', " +
        "description = '" + category.description + "' " +
        "WHERE category_id = '" + category.id + "'; " +
        "SET foreign_key_checks = 1;";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  getCategoryDetails(categoryId: number): Promise<Category> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Categories " +
        "WHERE category_id = " + categoryId;

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          var mapper = new CategoryMapper();
          var res = mapper.transformList(result);
          resolve(res[0]);
        } else resolve(null);
      });
    });
  }

  getCategoryList(): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Categories;";        

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          var mapper = new CategoryMapper();
          var res = mapper.transformList(result);
          resolve(res);
        } else resolve(null);
      });
    });
  }

  deleteCategory(categoryId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "DELETE FROM Categories " +
        "WHERE category_id = " + categoryId + ";" +
        "SET foreign_key_checks = 1; ";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  saveOrder(order: Order): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO Orders " +
        "(order_id, user_id, seller_id, date) " +
        "VALUES(" +
        "'" + order.id + "', " +
        "'" + order.user_id + "', " +
        "'" + order.seller_id + "', " +
        "'" + order.date + "' " +
        ");";
      var sql = this.sql;
      sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          var query = "";
          for (var i = 0; i < order.details.length; i++) {
            query += "INSERT INTO OrderDetails " +
              "(order_id, product_id, quantity, size) " +
              "VALUES(" +
              "'" + order.id + "', " +
              "'" + order.details[i].product_id + "', " +
              "'" + order.details[i].quantity + "', " +              
              "'" + order.details[i].size + "' " +
              ");";
          }
          var orderId = result.insertId;
          sql.query(query, function (err, result) {
            if (err) return reject(err);
            if (result.affectedRows > 0) {
              resolve(orderId);
            } else resolve();
          });          
        } else resolve(-1);
      });
    });
  }

  getOrderDetails(orderId: number): Promise<Order> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Orders o " +
        "INNER JOIN OrderDetails od ON o.order_id = od.order_id " +
        "WHERE o.order_id = " + orderId + ";";
        
        this.sql.query(query, function (err, result, fields) {
          if (err) return reject(err);
          if (result.length > 0) {
            var res = new Order(
              result[0].order_id,
              result[0].user_id,
              result[0].order_id,
              result[0].date,
              []
            )

          for(var i = 0;i < result.details.length; i++){
            result.details.push(
              new OrderDetail(
                result[i].order_id,
                result[i].product_id,
                result[i].quantity,                
                result[i].size
              )
            )
          }
          //var mapper = new OrderMapper();
          //var res = mapper.transformList(result);          
          resolve(res);
        } else resolve(null);
      });
    });
  }

  saveSeller(seller: Seller): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO Sellers " +
        "(seller_id, name) " +
        "VALUES(" +
        "'" + seller.id + "', " +        
        "'" + seller.name + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve(result.insertId);
        } else resolve(-1);
      });
    });
  }

  setSeller(seller: Seller): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "UPDATE Sellers " +
        "SET name = '" + seller.name + "' " +
        "WHERE seller_id = '" + seller.id + "'; " +
        "SET foreign_key_checks = 1;";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  getSellerDetails(sellerId: number): Promise<Seller> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Sellers " +
        "WHERE seller_id = " + sellerId;

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          var mapper = new SellerMapper();
          var res = mapper.transformList(result);
          resolve(res[0]);
        } else resolve(null);
      });
    });
  }

  getSellerList(sellerId: number): Promise<Seller[]> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Sellers;";
              
      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {    
          var mapper = new SellerMapper();
          var res = mapper.transformList(result);              
          resolve(res);
        } else resolve(null);
      });
    });
  }

  deleteSeller(sellerId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "DELETE FROM Sellers " +
        "WHERE seller_id = " + sellerId + ";" +
        "SET foreign_key_checks = 1; ";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  savePhoto(photo: Photo): Promise<number> {
    return new Promise((resolve, reject) => {
      var query =
        "INSERT INTO Photos " +
        "(photo_id, product_id, color_id, photo) " +
        "VALUES(" +
        "'" + photo.id + "', " +
        "'" + photo.product_id + "', " +
        "'" + photo.color_id + "', " +
        "'" + photo.photo + "' " +
        ");";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {          
          resolve(result.insertId);          
        } else resolve(-1);
      });
    });
  }

  setPhoto(photo: Photo): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "UPDATE Photos " +
        "SET product_id = '" + photo.product_id + "', " +
        "color_id = '" + photo.color_id + "', " +
        "photo = '" + photo.photo + "' " +        
        "WHERE photo_id = '" + photo.id + "'; " +
        "SET foreign_key_checks = 1;";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  getPhotoDetails(photoId: number): Promise<Photo> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Photos " +
        "WHERE photo_id = " + photoId;

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {
          var mapper = new PhotoMapper();
          var res = mapper.transformList(result);          
          resolve(res[0]);
        } else resolve(null);
      });
    });
  }

  getPhotoList(productId: number, colorId: number): Promise<Photo[]> {
    return new Promise((resolve, reject) => {
      var query =
        "SELECT * " +
        "FROM Photos ";
        if(productId){
          query += "WHERE product_id = " + productId;
          if(colorId)
            query += " AND color_id = " + colorId;
        }else{
          query += "WHERE color_id = " + colorId;
        }
        query+= ";";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {          
          resolve(result);
        } else resolve(null);
      });
    });
  }

  deletePhoto(photoId: number): Promise<void> {
    return new Promise((resolve, reject) => {
      var query =
        "SET foreign_key_checks = 0; " +
        "DELETE FROM Photos " +
        "WHERE photo_id = " + photoId + ";" +
        "SET foreign_key_checks = 1; ";

      this.sql.query(query, function (err, result) {
        if (err) return reject(err);
        if (result.affectedRows > 0) {
          resolve();
        } else resolve();
      });
    });
  }

  getColorList(): Promise <string[]>{
    return new Promise((resolve, reject) => {
      var query =
        "SELECT DISTINCT color " +
        "FROM Products " +
        "WHERE color IS NOT NULL;";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {          
          resolve(result);
        } else resolve(null);
      });
    });
  }
  getAgeList(): Promise <string[]>{
    return new Promise((resolve, reject) => {
      var query =
        "SELECT DISTINCT age " +
        "FROM Products " +
        "WHERE age IS NOT NULL;";

      this.sql.query(query, function (err, result, fields) {
        if (err) return reject(err);
        if (result.length > 0) {          
          resolve(result);
        } else resolve(null);
      });
    });
  }

}

export default new SqlSource();