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
var Routine_1 = require("../../../models/Routine");
var Mapper_1 = require("./Mapper");
var RoutineMapper = /** @class */ (function (_super) {
    __extends(RoutineMapper, _super);
    function RoutineMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoutineMapper.prototype.transform = function (query) {
        var data = new Routine_1.Routine(query.idRoutine, query.nombre, query.descripcion, query.video);
        return data;
    };
    return RoutineMapper;
}(Mapper_1.Mapper));
exports.RoutineMapper = RoutineMapper;
//# sourceMappingURL=RoutineMapper.js.map