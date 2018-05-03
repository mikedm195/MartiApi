"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model() {
    }
    Model.generateId = function () {
        return Math.floor(Math.random() * 10000000) + 1;
    };
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=Model.js.map