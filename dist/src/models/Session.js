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
var Session = /** @class */ (function (_super) {
    __extends(Session, _super);
    function Session(id, treatmentId, date) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.treatmentId = treatmentId;
        _this.date = date;
        return _this;
    }
    Session.prototype.export = function () {
        return {
            session_id: this.id,
            treatment_id: this.treatmentId,
            date: this.date
        };
    };
    return Session;
}(Model_1.Model));
exports.Session = Session;
//# sourceMappingURL=Session.js.map