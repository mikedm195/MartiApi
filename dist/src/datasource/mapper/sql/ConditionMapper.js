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
var Condition_1 = require("../../../models/Condition");
var Mapper_1 = require("./Mapper");
var ConditionMapper = /** @class */ (function (_super) {
    __extends(ConditionMapper, _super);
    function ConditionMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConditionMapper.prototype.transform = function (query) {
        var data = new Condition_1.Condition(query.idcondicion, query.idPaciente, query.nombreCondicion);
        return data;
    };
    return ConditionMapper;
}(Mapper_1.Mapper));
exports.ConditionMapper = ConditionMapper;
//# sourceMappingURL=ConditionMapper.js.map