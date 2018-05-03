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
var Routine = /** @class */ (function (_super) {
    __extends(Routine, _super);
    function Routine(id, name, description, video) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.video = video;
        return _this;
    }
    Routine.prototype.export = function () {
        return {
            routine_id: this.id,
            name: this.name,
            description: this.description,
            video: this.video
        };
    };
    return Routine;
}(Model_1.Model));
exports.Routine = Routine;
//# sourceMappingURL=Routine.js.map