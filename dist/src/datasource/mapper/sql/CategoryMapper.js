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
var Category_1 = require("../../../models/Category");
var Mapper_1 = require("./Mapper");
var CategoryMapper = /** @class */ (function (_super) {
    __extends(CategoryMapper, _super);
    function CategoryMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryMapper.prototype.transform = function (query) {
        var data = new Category_1.Category(query.category_id, query.name, query.description);
        return data;
    };
    return CategoryMapper;
}(Mapper_1.Mapper));
exports.CategoryMapper = CategoryMapper;
//# sourceMappingURL=CategoryMapper.js.map