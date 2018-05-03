"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Model_1 = require("./Model");
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order(id, user_id, seller_id, date, details) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.user_id = user_id;
        _this.seller_id = seller_id;
        _this.date = date;
        _this.details = details;
        return _this;
    }
    Order.prototype.export = function () {
        return {
            order_id: this.id,
            user_id: this.user_id,
            seller_id: this.seller_id,
            date: this.date,
            details: this.details
        };
    };
    return Order;
}(Model_1.Model));
exports.Order = Order;
//# sourceMappingURL=Order.js.map