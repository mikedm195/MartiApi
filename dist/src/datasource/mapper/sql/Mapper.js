"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mapper = /** @class */ (function () {
    function Mapper() {
    }
    Mapper.prototype.transformList = function (query) {
        if (!query)
            return [];
        var data = [];
        for (var i = 0; i < query.length; i++) {
            data.push(this.transform(query[i]));
        }
        return data;
    };
    return Mapper;
}());
exports.Mapper = Mapper;
//# sourceMappingURL=Mapper.js.map