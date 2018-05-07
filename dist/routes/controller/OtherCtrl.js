"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var CtrlUtil_1 = require("./CtrlUtil");
var OtherCtrl = /** @class */ (function () {
    function OtherCtrl() {
    }
    OtherCtrl.prototype.getColorList = function (req, res, next) {
        SqlSource_1.default.getColorList()
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    OtherCtrl.prototype.getAgeList = function (req, res, next) {
        SqlSource_1.default.getAgeList()
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendObject(res, result);
        });
    };
    return OtherCtrl;
}());
exports.default = OtherCtrl;
//# sourceMappingURL=OtherCtrl.js.map