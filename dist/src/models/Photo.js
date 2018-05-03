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
var Photo = /** @class */ (function (_super) {
    __extends(Photo, _super);
    function Photo(id, product_id, color_id, photo) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.product_id = product_id;
        _this.color_id = color_id;
        _this.photo = photo;
        return _this;
    }
    Photo.prototype.export = function () {
        return {
            photo_id: this.id,
            product_id: this.product_id,
            color_id: this.color_id,
            photo: this.photo,
        };
    };
    return Photo;
}(Model_1.Model));
exports.Photo = Photo;
//# sourceMappingURL=Photo.js.map