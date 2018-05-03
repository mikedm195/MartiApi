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
var DeviceLog_1 = require("../../../models/DeviceLog");
var Mapper_1 = require("./Mapper");
var DeviceLogMapper = /** @class */ (function (_super) {
    __extends(DeviceLogMapper, _super);
    function DeviceLogMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceLogMapper.prototype.transform = function (query) {
        var data = new DeviceLog_1.DeviceLog(query.idDatosSesion, query.idSesion, query.time, query.dato, query.dato2, query.dato3, query.dato4, query.dato5);
        return data;
    };
    return DeviceLogMapper;
}(Mapper_1.Mapper));
exports.DeviceLogMapper = DeviceLogMapper;
//# sourceMappingURL=DeviceLogMapper.js.map