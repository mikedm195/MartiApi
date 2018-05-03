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
var User_1 = require("../../../models/User");
var Mapper_1 = require("./Mapper");
var UserMapper = /** @class */ (function (_super) {
    __extends(UserMapper, _super);
    function UserMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserMapper.prototype.transform = function (query) {
        var data = new User_1.User(query.user_id, query.email, query.password, query.name, query.last_name, query.gender, query.height, query.weight, query.address, query.rol);
        return data;
    };
    return UserMapper;
}(Mapper_1.Mapper));
exports.UserMapper = UserMapper;
//# sourceMappingURL=UserMapper.js.map