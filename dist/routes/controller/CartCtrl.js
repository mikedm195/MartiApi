"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Cart_1 = require("../../src/models/Cart");
var CtrlUtil_1 = require("./CtrlUtil");
var CartCtrl = /** @class */ (function () {
    function CartCtrl() {
    }
    CartCtrl.prototype.saveCart = function (req, res, next) {
        var cart = new Cart_1.Cart(req.body.user_id, req.body.product_id, req.body.quantity, req.body.size);
        SqlSource_1.default.saveCart(cart)
            .then(function (result) {
            var out = { cart_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    CartCtrl.prototype.getCartDetails = function (req, res, next) {
        var userId = req.query.user_id;
        var productId = req.query.product_id;
        SqlSource_1.default.getCartDetails(userId, productId)
            .then(function (result) {
            result.product.photo = "http://" + req.get('host') + "/images/" + result.product.photo;
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    CartCtrl.prototype.getCartList = function (req, res, next) {
        var userId = req.query.user_id;
        SqlSource_1.default.getCartList(userId)
            .then(function (result) {
            for (var i = 0; i < result.length; i++) {
                result[i].product.photo = "http://" + req.get('host') + "/images/" + result[i].product.photo;
            }
            CtrlUtil_1.CtrlUtil.sendList(res, result);
        });
    };
    CartCtrl.prototype.setCart = function (req, res, next) {
        var cartId = req.body.cart_id;
        var productId = req.body.product_id;
        SqlSource_1.default.getCartDetails(cartId, productId)
            .then(function (result) {
            var cart = new Cart_1.Cart(cartId, req.body.product_id ? req.body.product_id : result.product_id, req.body.quantity ? req.body.quantity : result.quantity, req.body.size ? req.body.size : result.size);
            SqlSource_1.default.setCart(cart)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    CartCtrl.prototype.deleteCart = function (req, res, next) {
        var userId = req.body.user_id;
        var productId = req.body.product_id;
        console.log(JSON.stringify(req.body, null, "\t"));
        console.log(userId, productId);
        SqlSource_1.default.deleteCart(userId, productId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return CartCtrl;
}());
exports.default = CartCtrl;
//# sourceMappingURL=CartCtrl.js.map