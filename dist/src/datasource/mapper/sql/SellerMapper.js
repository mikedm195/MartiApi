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
var Seller_1 = require("../../../models/Seller");
var Mapper_1 = require("./Mapper");
var SellerMapper = /** @class */ (function (_super) {
    __extends(SellerMapper, _super);
    function SellerMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SellerMapper.prototype.transform = function (query) {
        var data = new Seller_1.Seller(query.seller_id, query.name);
        return data;
    };
    return SellerMapper;
}(Mapper_1.Mapper));
exports.SellerMapper = SellerMapper;
//# sourceMappingURL=SellerMapper.js.map