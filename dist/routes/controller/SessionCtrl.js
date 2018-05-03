"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Session_1 = require("../../src/models/Session");
var CtrlUtil_1 = require("./CtrlUtil");
var SessionCtrl = /** @class */ (function () {
    function SessionCtrl() {
    }
    SessionCtrl.prototype.saveSession = function (req, res, next) {
        var session = new Session_1.Session(Model_1.Model.generateId(), req.body.treatment_id, req.body.date);
        SqlSource_1.default.saveSession(session)
            .then(function (result) {
            var out = { session_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    SessionCtrl.prototype.getSessionDetails = function (req, res, next) {
        var sessionId = req.query.session_id;
        SqlSource_1.default.getSessionDetails(sessionId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    SessionCtrl.prototype.getSessionList = function (req, res, next) {
        var treatmentId = req.query.treatment_id;
        SqlSource_1.default.getSessionList(treatmentId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendList(res, result);
        });
    };
    // idTratamiento 4234065
    // startDate 2018-01-01
    // endDate 2020-01-01
    // status  0
    // idRutina 4
    // idPaciente 6
    // idCondicion 1 
    SessionCtrl.prototype.deleteSession = function (req, res, next) {
        var sessionId = req.body.session_id;
        SqlSource_1.default.deleteSession(sessionId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return SessionCtrl;
}());
exports.default = SessionCtrl;
//# sourceMappingURL=SessionCtrl.js.map