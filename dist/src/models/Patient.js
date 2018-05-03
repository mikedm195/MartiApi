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
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(id, doctorId, name, lastName, email, password, phone, birth, weight, height, photo) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.doctorId = doctorId;
        _this.name = name;
        _this.lastName = lastName;
        _this.email = email;
        _this.password = password;
        _this.phone = phone;
        _this.birth = birth;
        _this.weight = weight;
        _this.height = height;
        _this.photo = photo;
        return _this;
    }
    Patient.prototype.export = function () {
        return {
            patient_id: this.id,
            doctor_id: this.doctorId,
            name: this.name,
            last_name: this.lastName,
            email: this.email,
            phone: this.phone,
            birth: this.birth,
            weight: this.weight,
            height: this.height,
            photo: this.photo
        };
    };
    return Patient;
}(Model_1.Model));
exports.Patient = Patient;
//# sourceMappingURL=Patient.js.map