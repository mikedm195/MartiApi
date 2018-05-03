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
var OrderDetail = /** @class */ (function (_super) {
    __extends(OrderDetail, _super);
    function OrderDetail(id, product_id, quantity, color, size) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.product_id = product_id;
        _this.quantity = quantity;
        _this.color = color;
        _this.size = size;
        return _this;
    }
    OrderDetail.prototype.export = function () {
        return {
            orderDetail_id: this.id,
            product_id: this.product_id,
            quantity: this.quantity,
            color: this.color,
            size: this.size,
        };
    };
    return OrderDetail;
}(Model_1.Model));
exports.OrderDetail = OrderDetail;
//# sourceMappingURL=OrderDetail.js.map