"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CtrlUtil = /** @class */ (function () {
    function CtrlUtil() {
    }
    CtrlUtil.sendOk = function (res) {
        res.send();
    };
    CtrlUtil.sendObject = function (res, result) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result ? result : {}));
    };
    CtrlUtil.sendList = function (res, result) {
        res.setHeader('Content-Type', 'application/json');
        var out = [];
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var r = result_1[_i];
            out.push(r.export());
        }
        res.send(JSON.stringify(out ? out : []));
    };
    CtrlUtil.sendModel = function (res, result) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result ? result.export() : {}));
    };
    return CtrlUtil;
}());
exports.CtrlUtil = CtrlUtil;
//# sourceMappingURL=CtrlUtil.js.map