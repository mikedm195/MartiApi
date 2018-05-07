"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Seller_1 = require("../../src/models/Seller");
var CtrlUtil_1 = require("./CtrlUtil");
var SellerCtrl = /** @class */ (function () {
    function SellerCtrl() {
    }
    SellerCtrl.prototype.saveSeller = function (req, res, next) {
        var seller = new Seller_1.Seller(Model_1.Model.generateId(), req.body.name);
        SqlSource_1.default.saveSeller(seller)
            .then(function (result) {
            var out = { seller_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    SellerCtrl.prototype.getSellerDetails = function (req, res, next) {
        var sellerId = req.query.seller_id;
        SqlSource_1.default.getSellerDetails(sellerId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    SellerCtrl.prototype.getSellerList = function (req, res, next) {
        var patientId = req.query.patient_id;
        SqlSource_1.default.getSellerList(patientId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendList(res, result);
        });
    };
    SellerCtrl.prototype.setSeller = function (req, res, next) {
        var sellerId = req.body.seller_id;
        SqlSource_1.default.getSellerDetails(sellerId)
            .then(function (result) {
            var seller = new Seller_1.Seller(sellerId, req.body.name ? req.body.name : result.name);
            SqlSource_1.default.setSeller(seller)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    SellerCtrl.prototype.deleteSeller = function (req, res, next) {
        var sellerId = req.query.seller_id;
        console.log("sellerId " + sellerId);
        SqlSource_1.default.deleteSeller(sellerId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return SellerCtrl;
}());
exports.default = SellerCtrl;
//# sourceMappingURL=SellerCtrl.js.map