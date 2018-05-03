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
var DeviceLog = /** @class */ (function (_super) {
    __extends(DeviceLog, _super);
    function DeviceLog(id, sessionId, time, data1, data2, data3, data4, data5) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.sessionId = sessionId;
        _this.time = time;
        _this.data1 = data1;
        _this.data2 = data2;
        _this.data3 = data3;
        _this.data4 = data4;
        _this.data5 = data5;
        return _this;
    }
    DeviceLog.prototype.export = function () {
        return {
            log_id: this.id,
            session_id: this.sessionId,
            time: this.time,
            data1: this.data1,
            data2: this.data2,
            data3: this.data3,
            data4: this.data4,
            data5: this.data5
        };
    };
    return DeviceLog;
}(Model_1.Model));
exports.DeviceLog = DeviceLog;
//# sourceMappingURL=DeviceLog.js.map