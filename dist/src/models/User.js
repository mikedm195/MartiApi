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
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id, email, password, name, last_name, gender, height, weight, address, rol) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.email = email;
        _this.password = password;
        _this.name = name;
        _this.last_name = last_name;
        _this.gender = gender;
        _this.height = height;
        _this.weight = weight;
        _this.address = address;
        _this.rol = rol;
        return _this;
    }
    User.prototype.export = function () {
        return {
            user_id: this.id,
            email: this.email,
            name: this.name,
            last_name: this.last_name,
            gender: this.gender,
            height: this.height,
            weight: this.weight,
            address: this.address,
            rol: this.rol,
        };
    };
    return User;
}(Model_1.Model));
exports.User = User;
//# sourceMappingURL=User.js.map