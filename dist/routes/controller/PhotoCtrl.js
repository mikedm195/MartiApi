"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Photo_1 = require("../../src/models/Photo");
var CtrlUtil_1 = require("./CtrlUtil");
var PhotoCtrl = /** @class */ (function () {
    function PhotoCtrl() {
    }
    PhotoCtrl.prototype.savePhoto = function (req, res, next) {
        var photo = new Photo_1.Photo(Model_1.Model.generateId(), req.body.product_id, req.body.color_id, req.file.filename);
        SqlSource_1.default.savePhoto(photo)
            .then(function (result) {
            var out = { photo_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    PhotoCtrl.prototype.getPhotoDetails = function (req, res, next) {
        var photoId = req.query.photo_id;
        SqlSource_1.default.getPhotoDetails(photoId)
            .then(function (result) {
            result.photo = "http://" + req.get('host') + "/images/" + result.photo;
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    PhotoCtrl.prototype.getPhotoList = function (req, res, next) {
        var productId = req.query.product_id;
        var colorId = req.query.color_id;
        SqlSource_1.default.getPhotoList(productId, colorId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendList(res, result);
        });
    };
    PhotoCtrl.prototype.setPhoto = function (req, res, next) {
        var photoId = req.body.photo_id;
        SqlSource_1.default.getPhotoDetails(photoId)
            .then(function (result) {
            var photo = new Photo_1.Photo(photoId, req.body.product_id ? req.body.product_id : result.product_id, req.body.color_id ? req.body.color_id : result.color_id, req.file.path ? req.file.path : result.photo);
            SqlSource_1.default.setPhoto(photo)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    PhotoCtrl.prototype.deletePhoto = function (req, res, next) {
        var photoId = req.body.photo_id;
        SqlSource_1.default.deletePhoto(photoId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return PhotoCtrl;
}());
exports.default = PhotoCtrl;
//# sourceMappingURL=PhotoCtrl.js.map