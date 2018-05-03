"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Treatment_1 = require("../../src/models/Treatment");
var CtrlUtil_1 = require("./CtrlUtil");
var TreatmentCtrl = /** @class */ (function () {
    function TreatmentCtrl() {
    }
    TreatmentCtrl.prototype.saveTreatment = function (req, res, next) {
        var treatment = new Treatment_1.Treatment(Model_1.Model.generateId(), req.body.patient_id, req.body.routine_id, req.body.condition_id, req.body.start_date, req.body.end_date, req.body.status, req.body.comments);
        SqlSource_1.default.saveTreatment(treatment)
            .then(function (result) {
            var out = { treatment_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    TreatmentCtrl.prototype.getTreatmentDetails = function (req, res, next) {
        var treatmentId = req.query.treatment_id;
        SqlSource_1.default.getTreatmentDetails(treatmentId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    TreatmentCtrl.prototype.getTreatmentList = function (req, res, next) {
        var patientId = req.query.patient_id;
        SqlSource_1.default.getTreatmentList(patientId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendList(res, result);
        });
    };
    TreatmentCtrl.prototype.setTreatment = function (req, res, next) {
        var treatmentId = req.body.treatment_id;
        SqlSource_1.default.getTreatmentDetails(treatmentId)
            .then(function (result) {
            var treatment = new Treatment_1.Treatment(treatmentId, req.body.patient_id ? req.body.patient_id : result.patientId, req.body.routine_id ? req.body.routine_id : result.routineId, req.body.condition_id ? req.body.condition_id : result.conditionId, req.body.start_date ? req.body.start_date : result.startDate, req.body.end_date ? req.body.end_date : result.endDate, req.body.status ? req.body.status : result.status, req.body.comments ? req.body.comments : result.comments);
            SqlSource_1.default.setTreatment(treatment)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    TreatmentCtrl.prototype.deleteTreatment = function (req, res, next) {
        var treatmentId = req.body.treatment_id;
        SqlSource_1.default.deleteTreatment(treatmentId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return TreatmentCtrl;
}());
exports.default = TreatmentCtrl;
//# sourceMappingURL=TreatmentCtrl.js.map