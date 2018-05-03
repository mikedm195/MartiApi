"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Patient_1 = require("../../src/models/Patient");
var CtrlUtil_1 = require("./CtrlUtil");
var PatientCtrl = /** @class */ (function () {
    function PatientCtrl() {
    }
    PatientCtrl.prototype.isPatientAuth = function (req, res, next) {
        var email = req.query.email;
        var password = req.query.password;
        SqlSource_1.default.isPatientAuth(email, password)
            .then(function (result) {
            var out = { patient_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    PatientCtrl.prototype.savePatient = function (req, res, next) {
        console.log("req.body " + JSON.stringify(req.body));
        var patient = new Patient_1.Patient(Model_1.Model.generateId(), req.body.doctor_id, req.body.name, req.body.last_name, req.body.email, req.body.password, req.body.phone, req.body.birth, req.body.weight, req.body.height, req.body.photo);
        SqlSource_1.default.savePatient(patient)
            .then(function (result) {
            var out = { patient_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    PatientCtrl.prototype.getPatientDetails = function (req, res, next) {
        var patientId = req.query.patient_id;
        SqlSource_1.default.getPatientDetails(patientId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    PatientCtrl.prototype.getPatientList = function (req, res, next) {
        var doctorId = req.query.doctor_id;
        SqlSource_1.default.getPatientList(doctorId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendList(res, result);
        });
    };
    PatientCtrl.prototype.setPatient = function (req, res, next) {
        var patientId = req.body.patient_id;
        SqlSource_1.default.getPatientDetails(patientId)
            .then(function (result) {
            var patient = new Patient_1.Patient(patientId, req.body.doctor_id ? req.body.doctor_id : result.doctorId, req.body.name ? req.body.name : result.name, req.body.last_name ? req.body.last_name : result.lastName, req.body.email ? req.body.email : result.email, req.body.password ? req.body.password : result.password, req.body.phone ? req.body.phone : result.phone, req.body.birth ? req.body.birth : result.birth, req.body.weight ? req.body.weight : result.weight, req.body.height ? req.body.height : result.height, req.body.photo ? req.body.photo : result.photo);
            SqlSource_1.default.setPatient(patient)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    PatientCtrl.prototype.deletePatient = function (req, res, next) {
        var patientId = req.body.patient_id;
        console.log("patientId " + patientId);
        SqlSource_1.default.deletePatient(patientId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return PatientCtrl;
}());
exports.default = PatientCtrl;
//# sourceMappingURL=PatientCtrl.js.map