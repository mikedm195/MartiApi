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
var Category = /** @class */ (function (_super) {
    __extends(Category, _super);
    function Category(id, name, description) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        return _this;
    }
    Category.prototype.export = function () {
        return {
            category_id: this.id,
            name: this.name,
            description: this.description,
        };
    };
    return Category;
}(Model_1.Model));
exports.Category = Category;
//# sourceMappingURL=Category.js.map