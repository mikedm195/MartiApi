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
var Session_1 = require("../../../models/Session");
var Mapper_1 = require("./Mapper");
var SessionMapper = /** @class */ (function (_super) {
    __extends(SessionMapper, _super);
    function SessionMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SessionMapper.prototype.transform = function (query) {
        var data = new Session_1.Session(query.idSesion, query.idTratamiento, query.fecha);
        return data;
    };
    return SessionMapper;
}(Mapper_1.Mapper));
exports.SessionMapper = SessionMapper;
//# sourceMappingURL=SessionMapper.js.map