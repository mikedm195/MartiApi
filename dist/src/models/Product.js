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
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(id, category_id, name, photo, video, price, color, age) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.category_id = category_id;
        _this.name = name;
        _this.photo = photo;
        _this.video = video;
        _this.price = price;
        _this.color = color;
        _this.age = age;
        return _this;
    }
    Product.prototype.export = function () {
        return {
            product_id: this.id,
            category_id: this.category_id,
            name: this.name,
            photo: this.photo,
            video: this.video,
            price: this.price,
            color: this.color,
            age: this.age
        };
    };
    return Product;
}(Model_1.Model));
exports.Product = Product;
//# sourceMappingURL=Product.js.map