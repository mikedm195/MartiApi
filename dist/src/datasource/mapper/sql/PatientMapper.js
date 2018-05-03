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
var Patient_1 = require("../../../models/Patient");
var Mapper_1 = require("./Mapper");
var PatientMapper = /** @class */ (function (_super) {
    __extends(PatientMapper, _super);
    function PatientMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PatientMapper.prototype.transform = function (query) {
        var data = new Patient_1.Patient(query.idPaciente, query.idDoctor, query.nombre, query.apellido, query.email, query.password, query.telefono, query.fechaNacimiento, query.peso, query.altura, query.poto);
        return data;
    };
    return PatientMapper;
}(Mapper_1.Mapper));
exports.PatientMapper = PatientMapper;
//# sourceMappingURL=PatientMapper.js.map