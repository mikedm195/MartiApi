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
var Treatment_1 = require("../../../models/Treatment");
var Mapper_1 = require("./Mapper");
var TreatmentMapper = /** @class */ (function (_super) {
    __extends(TreatmentMapper, _super);
    function TreatmentMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TreatmentMapper.prototype.transform = function (query) {
        var data = new Treatment_1.Treatment(query.idTratamiento, query.idPaciente, query.idRutina, query.idCondicion, query.startDate, query.endDate, query.status, query.comentario);
        return data;
    };
    return TreatmentMapper;
}(Mapper_1.Mapper));
exports.TreatmentMapper = TreatmentMapper;
//# sourceMappingURL=TreatmentMapper.js.map