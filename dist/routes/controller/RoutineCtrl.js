"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Routine_1 = require("../../src/models/Routine");
var CtrlUtil_1 = require("./CtrlUtil");
var RoutineCtrl = /** @class */ (function () {
    function RoutineCtrl() {
    }
    RoutineCtrl.prototype.saveRoutine = function (req, res, next) {
        var routine = new Routine_1.Routine(Model_1.Model.generateId(), req.body.name, req.body.description, req.body.video);
        SqlSource_1.default.saveRoutine(routine)
            .then(function (result) {
            var out = { routine_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    RoutineCtrl.prototype.getRoutineDetails = function (req, res, next) {
        var routineId = req.query.routine_id;
        SqlSource_1.default.getRoutineDetails(routineId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    RoutineCtrl.prototype.getRoutineList = function (req, res, next) {
        var patientId = req.query.patient_id;
        SqlSource_1.default.getRoutineList(patientId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendList(res, result);
        });
    };
    RoutineCtrl.prototype.setRoutine = function (req, res, next) {
        var routineId = req.body.routine_id;
        SqlSource_1.default.getRoutineDetails(routineId)
            .then(function (result) {
            var routine = new Routine_1.Routine(routineId, req.body.name ? req.body.name : result.name, req.body.description ? req.body.description : result.description, req.body.video ? req.body.video : result.video);
            SqlSource_1.default.setRoutine(routine)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    RoutineCtrl.prototype.deleteRoutine = function (req, res, next) {
        var routineId = req.body.routine_id;
        SqlSource_1.default.deleteRoutine(routineId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return RoutineCtrl;
}());
exports.default = RoutineCtrl;
//# sourceMappingURL=RoutineCtrl.js.map