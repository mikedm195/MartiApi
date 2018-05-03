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
var Product_1 = require("../../../models/Product");
var Mapper_1 = require("./Mapper");
var ProductMapper = /** @class */ (function (_super) {
    __extends(ProductMapper, _super);
    function ProductMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductMapper.prototype.transform = function (query) {
        var data = new Product_1.Product(query.product_id, query.category_id, query.name, query.photo, query.video, query.price, query.color, query.age);
        return data;
    };
    return ProductMapper;
}(Mapper_1.Mapper));
exports.ProductMapper = ProductMapper;
//# sourceMappingURL=ProductMapper.js.map