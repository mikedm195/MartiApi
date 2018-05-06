"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var Order_1 = require("../models/Order");
var OrderDetail_1 = require("../models/OrderDetail");
var CartMapper_1 = require("./mapper/sql/CartMapper");
var CategoryMapper_1 = require("./mapper/sql/CategoryMapper");
var PhotoMapper_1 = require("./mapper/sql/PhotoMapper");
var ProductMapper_1 = require("./mapper/sql/ProductMapper");
var SellerMapper_1 = require("./mapper/sql/SellerMapper");
var UserMapper_1 = require("./mapper/sql/UserMapper");
var SqlSource = /** @class */ (function () {
    function SqlSource() {
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
    SqlSource.prototype.isUserAuth = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT user_id, rol " +
                "FROM Users " +
                "WHERE email = '" + email + "' " +
                "AND password = '" + password + "';";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var mapper = new UserMapper_1.UserMapper();
                    var res = mapper.transformList(result);
                    resolve(res[0]);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.saveUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO Users " +
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
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
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
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getUserDetails = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM Users " +
                "WHERE user_id = " + userId;
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var mapper = new UserMapper_1.UserMapper();
                    var res = mapper.transformList(result);
                    resolve(res[0]);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteUser = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
                "DELETE FROM Users " +
                "WHERE user_id = " + userId + ";" +
                "SET foreign_key_checks = 1; ";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.saveProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO Products " +
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
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setProduct = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
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
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getProductDetails = function (productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM Products " +
                "WHERE product_id = " + productId;
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var mapper = new ProductMapper_1.ProductMapper();
                    var res = mapper.transformList(result);
                    resolve(res[0]);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.getProductList = function (categoryId, color, age) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var whereQuery = null;
            var query = "SELECT * " +
                "FROM Products ";
            if (categoryId)
                whereQuery = "WHERE category_id = " + categoryId;
            if (color)
                if (!whereQuery)
                    whereQuery = "WHERE color = '" + color + "' ";
                else
                    whereQuery += " AND color = '" + color + "' ";
            if (age)
                if (!whereQuery)
                    whereQuery = "WHERE age = '" + age + "' ";
                else
                    whereQuery += " AND age = '" + age + "' ";
            if (whereQuery)
                query += whereQuery;
            query += ";";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var mapper = new ProductMapper_1.ProductMapper();
                    var res = mapper.transformList(result);
                    resolve(res);
                }
                else
                    resolve([]);
            });
        });
    };
    SqlSource.prototype.deleteProduct = function (productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
                "DELETE FROM Products " +
                "WHERE product_id = " + productId + ";" +
                "SET foreign_key_checks = 1; ";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.saveCart = function (cart) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO Carts " +
                "(user_id, product_id, quantity, size) " +
                "VALUES(" +
                "'" + cart.user_id + "', " +
                "'" + cart.product_id + "', " +
                "'" + cart.quantity + "', " +
                "'" + cart.size + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setCart = function (cart) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
                "UPDATE Carts " +
                "SET product_id = '" + cart.product_id + "', " +
                "quantity = '" + cart.quantity + "', " +
                "size = '" + cart.size + "' " +
                "WHERE user_id = '" + cart.user_id + "'; " +
                "SET foreign_key_checks = 1;";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getCartDetails = function (userId, productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM Carts c " +
                "LEFT JOIN Products p ON c.product_id = p.product_id " +
                "WHERE user_id = " + userId + " AND p.product_id = " + productId + ";";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var mapper = new CartMapper_1.CartMapper();
                    var res = mapper.transformList(result);
                    resolve(res[0]);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.getCartList = function (userId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM Carts c " +
                "LEFT JOIN Products p ON c.product_id = p.product_id ";
            "WHERE user_id = " + userId;
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var mapper = new CartMapper_1.CartMapper();
                    var res = mapper.transformList(result);
                    resolve(res);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteCart = function (userId, productId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
                "DELETE FROM Carts " +
                "WHERE user_id = " + userId + " AND product_id = " + productId + ";" +
                "SET foreign_key_checks = 1; ";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.saveCategory = function (category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO Categories " +
                "(category_id, name, description) " +
                "VALUES(" +
                "'" + category.id + "', " +
                "'" + category.name + "', " +
                "'" + category.description + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setCategory = function (category) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
                "UPDATE Categories " +
                "SET name = '" + category.name + "', " +
                "description = '" + category.description + "' " +
                "WHERE category_id = '" + category.id + "'; " +
                "SET foreign_key_checks = 1;";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getCategoryDetails = function (categoryId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM Categories " +
                "WHERE category_id = " + categoryId;
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var mapper = new CategoryMapper_1.CategoryMapper();
                    var res = mapper.transformList(result);
                    resolve(res[0]);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteCategory = function (categoryId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
                "DELETE FROM Categories " +
                "WHERE category_id = " + categoryId + ";" +
                "SET foreign_key_checks = 1; ";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.saveOrder = function (order) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO Orders " +
                "(order_id, user_id, seller_id, date) " +
                "VALUES(" +
                "'" + order.id + "', " +
                "'" + order.user_id + "', " +
                "'" + order.seller_id + "', " +
                "'" + order.date + "' " +
                ");";
            var sql = _this.sql;
            sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
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
                        if (err)
                            return reject(err);
                        if (result.affectedRows > 0) {
                            resolve(orderId);
                        }
                        else
                            resolve();
                    });
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.getOrderDetails = function (orderId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM Orders o " +
                "INNER JOIN OrderDetails od ON o.order_id = od.order_id " +
                "WHERE o.order_id = " + orderId + ";";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var res = new Order_1.Order(result[0].order_id, result[0].user_id, result[0].order_id, result[0].date, []);
                    for (var i = 0; i < result.details.length; i++) {
                        result.details.push(new OrderDetail_1.OrderDetail(result[i].order_id, result[i].product_id, result[i].quantity, result[i].size));
                    }
                    //var mapper = new OrderMapper();
                    //var res = mapper.transformList(result);          
                    resolve(res);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.saveSeller = function (seller) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO Sellers " +
                "(seller_id, name) " +
                "VALUES(" +
                "'" + seller.id + "', " +
                "'" + seller.name + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setSeller = function (seller) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
                "UPDATE Sellers " +
                "SET name = '" + seller.name + "' " +
                "WHERE seller_id = '" + seller.id + "'; " +
                "SET foreign_key_checks = 1;";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getSellerDetails = function (sellerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM Sellers " +
                "WHERE seller_id = " + sellerId;
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var mapper = new SellerMapper_1.SellerMapper();
                    var res = mapper.transformList(result);
                    resolve(res[0]);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.getSellerList = function (sellerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM Orders " +
                "WHERE seller_id = " + sellerId;
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deleteSeller = function (sellerId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
                "DELETE FROM Sellers " +
                "WHERE seller_id = " + sellerId + ";" +
                "SET foreign_key_checks = 1; ";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    SqlSource.prototype.savePhoto = function (photo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "INSERT INTO Photos " +
                "(photo_id, product_id, color_id, photo) " +
                "VALUES(" +
                "'" + photo.id + "', " +
                "'" + photo.product_id + "', " +
                "'" + photo.color_id + "', " +
                "'" + photo.photo + "' " +
                ");";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve(result.insertId);
                }
                else
                    resolve(-1);
            });
        });
    };
    SqlSource.prototype.setPhoto = function (photo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
                "UPDATE Photos " +
                "SET product_id = '" + photo.product_id + "', " +
                "color_id = '" + photo.color_id + "', " +
                "photo = '" + photo.photo + "' " +
                "WHERE photo_id = '" + photo.id + "'; " +
                "SET foreign_key_checks = 1;";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    };
    SqlSource.prototype.getPhotoDetails = function (photoId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM Photos " +
                "WHERE photo_id = " + photoId;
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    var mapper = new PhotoMapper_1.PhotoMapper();
                    var res = mapper.transformList(result);
                    resolve(res[0]);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.getPhotoList = function (productId, colorId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SELECT * " +
                "FROM Photos ";
            if (productId) {
                query += "WHERE product_id = " + productId;
                if (colorId)
                    query += " AND color_id = " + colorId;
            }
            else {
                query += "WHERE color_id = " + colorId;
            }
            query += ";";
            _this.sql.query(query, function (err, result, fields) {
                if (err)
                    return reject(err);
                if (result.length > 0) {
                    resolve(result);
                }
                else
                    resolve(null);
            });
        });
    };
    SqlSource.prototype.deletePhoto = function (photoId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var query = "SET foreign_key_checks = 0; " +
                "DELETE FROM Photos " +
                "WHERE photo_id = " + photoId + ";" +
                "SET foreign_key_checks = 1; ";
            _this.sql.query(query, function (err, result) {
                if (err)
                    return reject(err);
                if (result.affectedRows > 0) {
                    resolve();
                }
                else
                    resolve();
            });
        });
    };
    return SqlSource;
}());
exports.SqlSource = SqlSource;
exports.default = new SqlSource();
//# sourceMappingURL=SqlSource.js.map