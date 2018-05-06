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
var Cart_1 = require("../../../models/Cart");
var Product_1 = require("../../../models/Product");
var Mapper_1 = require("./Mapper");
var CartMapper = /** @class */ (function (_super) {
    __extends(CartMapper, _super);
    function CartMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartMapper.prototype.transform = function (query) {
        var product = new Product_1.Product(query.product_id, query.category_id, query.name, query.photo, query.video, query.price, query.color, query.age);
        var data = new Cart_1.Cart(query.user_id, query.product_id, query.quantity, query.size);
        data.product = product;
        return data;
    };
    return CartMapper;
}(Mapper_1.Mapper));
exports.CartMapper = CartMapper;
//# sourceMappingURL=CartMapper.js.map