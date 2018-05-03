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
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart(id, product_id, quantity, color, size) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.product_id = product_id;
        _this.quantity = quantity;
        _this.color = color;
        _this.size = size;
        return _this;
    }
    Cart.prototype.export = function () {
        return {
            cart_id: this.id,
            product_id: this.product_id,
            quantity: this.quantity,
            color: this.color,
            size: this.size,
        };
    };
    return Cart;
}(Model_1.Model));
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map