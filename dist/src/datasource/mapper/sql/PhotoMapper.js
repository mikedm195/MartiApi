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
var Photo_1 = require("../../../models/Photo");
var Mapper_1 = require("./Mapper");
var PhotoMapper = /** @class */ (function (_super) {
    __extends(PhotoMapper, _super);
    function PhotoMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoMapper.prototype.transform = function (query) {
        var data = new Photo_1.Photo(query.photo_id, query.product_id, query.color_id, query.photo);
        return data;
    };
    return PhotoMapper;
}(Mapper_1.Mapper));
exports.PhotoMapper = PhotoMapper;
//# sourceMappingURL=PhotoMapper.js.map