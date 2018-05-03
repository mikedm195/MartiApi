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
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(id, name, lastName, email, password) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.lastName = lastName;
        _this.email = email;
        _this.password = password;
        return _this;
    }
    Doctor.prototype.export = function () {
        return {
            doctor_id: this.id,
            name: this.name,
            last_name: this.lastName,
            email: this.email
        };
    };
    return Doctor;
}(Model_1.Model));
exports.Doctor = Doctor;
//# sourceMappingURL=Doctor.js.map