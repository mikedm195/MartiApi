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
var Doctor_1 = require("../../../models/Doctor");
var Mapper_1 = require("./Mapper");
var DoctorMapper = /** @class */ (function (_super) {
    __extends(DoctorMapper, _super);
    function DoctorMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DoctorMapper.prototype.transform = function (query) {
        var data = new Doctor_1.Doctor(query.idDoctor, query.nombre, query.apellido, query.email, query.password);
        return data;
    };
    return DoctorMapper;
}(Mapper_1.Mapper));
exports.DoctorMapper = DoctorMapper;
//# sourceMappingURL=DoctorMapper.js.map