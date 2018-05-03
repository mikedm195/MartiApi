"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var DeviceLog_1 = require("../../src/models/DeviceLog");
var CtrlUtil_1 = require("./CtrlUtil");
var DeviceLogCtrl = /** @class */ (function () {
    function DeviceLogCtrl() {
    }
    DeviceLogCtrl.prototype.saveDeviceLog = function (req, res, next) {
        var deviceLog = new DeviceLog_1.DeviceLog(Model_1.Model.generateId(), req.body.session_id, Date.now(), req.body.data1, req.body.data2, req.body.data3, req.body.data4, req.body.data5);
        SqlSource_1.default.saveDeviceLog(deviceLog)
            .then(function (result) {
            var out = { deviceLog_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    DeviceLogCtrl.prototype.getDeviceLogList = function (req, res, next) {
        var deviceLogId = req.query.session_id;
        SqlSource_1.default.getDeviceLogList(deviceLogId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendList(res, result);
        });
    };
    return DeviceLogCtrl;
}());
exports.default = DeviceLogCtrl;
//# sourceMappingURL=DeviceLogCtrl.js.map