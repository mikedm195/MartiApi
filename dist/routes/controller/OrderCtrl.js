"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Order_1 = require("../../src/models/Order");
var CtrlUtil_1 = require("./CtrlUtil");
var OrderCtrl = /** @class */ (function () {
    function OrderCtrl() {
    }
    OrderCtrl.prototype.saveOrder = function (req, res, next) {
        var details = JSON.parse(req.body.details);
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var date = parseInt([yyyy, (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join(''));
        var order = new Order_1.Order(Model_1.Model.generateId(), req.body.user_id, req.body.seller_id, date, details);
        console.log(JSON.stringify(order, null, "\t"));
        SqlSource_1.default.saveOrder(order)
            .then(function (result) {
            var out = { order_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    OrderCtrl.prototype.getOrderDetails = function (req, res, next) {
        var orderId = req.query.order_id;
        SqlSource_1.default.getOrderDetails(orderId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    return OrderCtrl;
}());
exports.default = OrderCtrl;
//# sourceMappingURL=OrderCtrl.js.map