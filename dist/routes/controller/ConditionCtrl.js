"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Condition_1 = require("../../src/models/Condition");
var CtrlUtil_1 = require("./CtrlUtil");
var ConditionCtrl = /** @class */ (function () {
    function ConditionCtrl() {
    }
    ConditionCtrl.prototype.saveCondition = function (req, res, next) {
        var condition = new Condition_1.Condition(Model_1.Model.generateId(), req.body.patient_id, req.body.description);
        SqlSource_1.default.saveCondition(condition)
            .then(function (result) {
            var out = { condition_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    ConditionCtrl.prototype.getConditionDetails = function (req, res, next) {
        var conditionId = req.query.condition_id;
        SqlSource_1.default.getConditionDetails(conditionId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    ConditionCtrl.prototype.setCondition = function (req, res, next) {
        var conditionId = req.body.condition_id;
        SqlSource_1.default.getConditionDetails(conditionId)
            .then(function (result) {
            var condition = new Condition_1.Condition(conditionId, req.body.patient_id ? req.body.patient_id : result.patientId, req.body.description ? req.body.description : result.description);
            SqlSource_1.default.setCondition(condition)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    ConditionCtrl.prototype.deleteCondition = function (req, res, next) {
        var conditionId = req.body.condition_id;
        SqlSource_1.default.deleteCondition(conditionId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return ConditionCtrl;
}());
exports.default = ConditionCtrl;
//# sourceMappingURL=ConditionCtrl.js.map