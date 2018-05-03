"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Doctor_1 = require("../../src/models/Doctor");
var CtrlUtil_1 = require("./CtrlUtil");
var DoctorCtrl = /** @class */ (function () {
    function DoctorCtrl() {
    }
    DoctorCtrl.prototype.isDoctorAuth = function (req, res, next) {
        var email = req.query.email;
        var password = req.query.password;
        SqlSource_1.default.isDoctorAuth(email, password)
            .then(function (result) {
            var out = { doctor_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    DoctorCtrl.prototype.saveDoctor = function (req, res, next) {
        var doctor = new Doctor_1.Doctor(Model_1.Model.generateId(), req.body.name, req.body.last_name, req.body.email, req.body.password);
        SqlSource_1.default.saveDoctor(doctor)
            .then(function (result) {
            var out = { doctor_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    DoctorCtrl.prototype.getDoctorDetails = function (req, res, next) {
        var doctorId = req.query.doctor_id;
        SqlSource_1.default.getDoctorDetails(doctorId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    DoctorCtrl.prototype.setDoctor = function (req, res, next) {
        var doctorId = req.body.doctor_id;
        SqlSource_1.default.getDoctorDetails(doctorId)
            .then(function (result) {
            var doctor = new Doctor_1.Doctor(doctorId, req.body.name ? req.body.name : result.name, req.body.last_name ? req.body.last_name : result.lastName, req.body.email ? req.body.email : result.email, req.body.password ? req.body.password : result.password);
            SqlSource_1.default.setDoctor(doctor)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    DoctorCtrl.prototype.deleteDoctor = function (req, res, next) {
        var doctorId = req.body.doctor_id;
        console.log("doctorId " + doctorId);
        SqlSource_1.default.deleteDoctor(doctorId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return DoctorCtrl;
}());
exports.default = DoctorCtrl;
//# sourceMappingURL=DoctorCtrl.js.map