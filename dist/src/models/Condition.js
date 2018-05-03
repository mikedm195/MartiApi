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
var Condition = /** @class */ (function (_super) {
    __extends(Condition, _super);
    function Condition(id, patientId, description) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.patientId = patientId;
        _this.description = description;
        return _this;
    }
    Condition.prototype.export = function () {
        return {
            session_id: this.id,
            patient_id: this.patientId,
            description: this.description
        };
    };
    return Condition;
}(Model_1.Model));
exports.Condition = Condition;
//# sourceMappingURL=Condition.js.map