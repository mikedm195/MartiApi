"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var User_1 = require("../../src/models/User");
var CtrlUtil_1 = require("./CtrlUtil");
var UserCtrl = /** @class */ (function () {
    function UserCtrl() {
    }
    UserCtrl.prototype.isUserAuth = function (req, res, next) {
        var email = req.query.email;
        var password = req.query.password;
        SqlSource_1.default.isUserAuth(email, password)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    UserCtrl.prototype.saveUser = function (req, res, next) {
        var user = new User_1.User(Model_1.Model.generateId(), req.body.email, req.body.password, req.body.name, req.body.last_name, req.body.gender, req.body.height, req.body.weight, req.body.address, req.body.rol);
        SqlSource_1.default.saveUser(user)
            .then(function (result) {
            var out = { user_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    UserCtrl.prototype.getUserDetails = function (req, res, next) {
        var userId = req.query.user_id;
        SqlSource_1.default.getUserDetails(userId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    UserCtrl.prototype.setUser = function (req, res, next) {
        var userId = req.body.user_id;
        SqlSource_1.default.getUserDetails(userId)
            .then(function (result) {
            var user = new User_1.User(userId, req.body.email ? req.body.email : result.email, req.body.password ? req.body.password : result.password, req.body.name ? req.body.name : result.name, req.body.last_name ? req.body.last_name : result.last_name, req.body.gender ? req.body.gender : result.gender, req.body.height ? req.body.height : result.height, req.body.weight ? req.body.weight : result.weight, req.body.address ? req.body.address : result.address, req.body.rol ? req.body.rol : result.rol);
            SqlSource_1.default.setUser(user)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    UserCtrl.prototype.deleteUser = function (req, res, next) {
        var userId = req.query.user_id;
        SqlSource_1.default.deleteUser(userId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return UserCtrl;
}());
exports.default = UserCtrl;
//# sourceMappingURL=UserCtrl.js.map