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
var Treatment = /** @class */ (function (_super) {
    __extends(Treatment, _super);
    function Treatment(id, patientId, routineId, conditionId, startDate, endDate, status, comments) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.patientId = patientId;
        _this.routineId = routineId;
        _this.conditionId = conditionId;
        _this.startDate = startDate;
        _this.endDate = endDate;
        _this.status = status;
        _this.comments = comments;
        return _this;
    }
    Treatment.prototype.export = function () {
        return {
            treatment_id: this.id,
            patient_id: this.patientId,
            routine_id: this.routineId,
            condition_id: this.conditionId,
            start_date: this.startDate,
            end_date: this.endDate,
            status: this.status,
            comments: this.comments
        };
    };
    return Treatment;
}(Model_1.Model));
exports.Treatment = Treatment;
//# sourceMappingURL=Treatment.js.map