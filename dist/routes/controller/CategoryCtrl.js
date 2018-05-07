"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SqlSource_1 = require("../../src/datasource/SqlSource");
var Model_1 = require("../../src/models/Model");
var Category_1 = require("../../src/models/Category");
var CtrlUtil_1 = require("./CtrlUtil");
var CategoryCtrl = /** @class */ (function () {
    function CategoryCtrl() {
    }
    CategoryCtrl.prototype.saveCategory = function (req, res, next) {
        var category = new Category_1.Category(Model_1.Model.generateId(), req.body.name, req.body.description);
        SqlSource_1.default.saveCategory(category)
            .then(function (result) {
            var out = { category_id: result };
            CtrlUtil_1.CtrlUtil.sendObject(res, out);
        });
    };
    CategoryCtrl.prototype.getCategoryDetails = function (req, res, next) {
        var categoryId = req.query.category_id;
        SqlSource_1.default.getCategoryDetails(categoryId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendModel(res, result);
        });
    };
    CategoryCtrl.prototype.getCategoryList = function (req, res, next) {
        SqlSource_1.default.getCategoryList()
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendList(res, result);
        });
    };
    CategoryCtrl.prototype.setCategory = function (req, res, next) {
        var categoryId = req.body.categoryt_id;
        SqlSource_1.default.getCategoryDetails(categoryId)
            .then(function (result) {
            var category = new Category_1.Category(categoryId, req.body.name ? req.body.name : result.name, req.body.description ? req.body.description : result.description);
            SqlSource_1.default.setCategory(category)
                .then(function (result) {
                CtrlUtil_1.CtrlUtil.sendOk(res);
            });
        });
    };
    CategoryCtrl.prototype.deleteCategory = function (req, res, next) {
        var categoryId = req.query.category_id;
        SqlSource_1.default.deleteCategory(categoryId)
            .then(function (result) {
            CtrlUtil_1.CtrlUtil.sendOk(res);
        });
    };
    return CategoryCtrl;
}());
exports.default = CategoryCtrl;
//# sourceMappingURL=CategoryCtrl.js.map