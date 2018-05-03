"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Product_1 = require("../../src/models/Product");
var CtrlUtil_1 = require("./CtrlUtil");
var ProductCtrl = /** @class */ (function () {
    function ProductCtrl() {
    }
    ProductCtrl.prototype.saveProduct = function (req, res, next) {
        var product = new Product_1.Product(Model_1.Model.generateId(), req.body.category_id, req.body.name, req.file.filename, 
        //req.body.photo,
        req.body.video, req.body.price, req.body.color, req.body.age);
        SqlSource_1.default.saveProduct(product)
            .then(function (result) {
            var out = { product_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    ProductCtrl.prototype.getProductDetails = function (req, res, next) {
        var productId = req.query.product_id;
        SqlSource_1.default.getProductDetails(productId)
            .then(function (result) {
            result.photo = "http://" + req.get('host') + "/images/" + result.photo;
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    ProductCtrl.prototype.getProductList = function (req, res, next) {
        var categoryId = req.query.category_id;
        SqlSource_1.default.getProductList(categoryId)
            .then(function (result) {
            for (var i = 0; i < result.length; i++) {
                result[i].photo = "http://" + req.get('host') + "/images/" + result[i].photo;
            }
            CtrlUtil_1.CtrlUtil.sendList(res, result);
        });
    };
    ProductCtrl.prototype.setProduct = function (req, res, next) {
        // console.log(JSON.stringify(req.body,null,"\t"))
        // console.log(JSON.stringify(req.file,null,"\t"))
        var productId = req.body.product_id;
        SqlSource_1.default.getProductDetails(productId)
            .then(function (result) {
            var product = new Product_1.Product(productId, req.body.category_id ? req.body.category_id : result.category_id, req.body.name ? req.body.name : result.name, req.file.filename ? req.file.filename : result.photo, req.body.video ? req.body.video : result.video, req.body.price ? req.body.price : result.price, req.body.color ? req.body.color : result.color, req.body.age ? req.body.age : result.age);
            SqlSource_1.default.setProduct(product)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    ProductCtrl.prototype.deleteProduct = function (req, res, next) {
        var productId = req.body.product_id;
        SqlSource_1.default.deleteProduct(productId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return ProductCtrl;
}());
exports.default = ProductCtrl;
//# sourceMappingURL=ProductCtrl.js.map