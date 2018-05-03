"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var CartCtrl_1 = require("./controller/CartCtrl");
var CategoryCtrl_1 = require("./controller/CategoryCtrl");
var OrderCtrl_1 = require("./controller/OrderCtrl");
var PhotoCtrl_1 = require("./controller/PhotoCtrl");
var ProductCtrl_1 = require("./controller/ProductCtrl");
var SellerCtrl_1 = require("./controller/SellerCtrl");
var UserCtrl_1 = require("./controller/UserCtrl");
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});
var fileFilter = function (req, file, cb) {
    if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    }
    else {
        cb(null, false);
    }
};
var upload = multer({ storage: storage, fileFilter: fileFilter });
var Api = /** @class */ (function () {
    function Api() {
        this.router = express_1.Router();
        this.cartCtrl = new CartCtrl_1.default();
        this.categoryCtrl = new CategoryCtrl_1.default();
        this.orderCtrl = new OrderCtrl_1.default();
        this.photoCtrl = new PhotoCtrl_1.default();
        this.productCtrl = new ProductCtrl_1.default();
        this.sellerCtrl = new SellerCtrl_1.default();
        this.userCtrl = new UserCtrl_1.default();
        this.init();
    }
    Api.prototype.init = function () {
        this.router.get('/user/auth/', this.userCtrl.isUserAuth);
        this.router.get('/user/', this.userCtrl.getUserDetails);
        this.router.post('/user/', this.userCtrl.saveUser);
        this.router.put('/user/', this.userCtrl.setUser);
        this.router.delete('/user/', this.userCtrl.deleteUser);
        this.router.get('/product/', this.productCtrl.getProductDetails);
        this.router.get('/product/list/', this.productCtrl.getProductList);
        this.router.post('/product/', upload.single('photo'), this.productCtrl.saveProduct);
        this.router.put('/product/', upload.single('photo'), this.productCtrl.setProduct);
        this.router.delete('/product/', this.productCtrl.deleteProduct);
        this.router.get('/cart/', this.cartCtrl.getCartDetails);
        this.router.get('/cart/list/', this.cartCtrl.getCartList);
        this.router.post('/cart/', this.cartCtrl.saveCart);
        this.router.put('/cart/', this.cartCtrl.setCart);
        this.router.delete('/cart/', this.cartCtrl.deleteCart);
        this.router.get('/category/', this.categoryCtrl.getCategoryDetails);
        this.router.post('/category/', this.categoryCtrl.saveCategory);
        this.router.put('/category/', this.categoryCtrl.setCategory);
        this.router.delete('/category/', this.categoryCtrl.deleteCategory);
        this.router.get('/seller/', this.sellerCtrl.getSellerDetails);
        this.router.get('/seller/list/', this.sellerCtrl.getSellerList);
        this.router.post('/seller/', this.sellerCtrl.saveSeller);
        this.router.put('/seller/', this.sellerCtrl.setSeller);
        this.router.delete('/seller/', this.sellerCtrl.deleteSeller);
        this.router.get('/photo/', this.photoCtrl.getPhotoDetails);
        this.router.get('/photo/list/', this.photoCtrl.getPhotoList);
        this.router.post('/photo/', upload.single('image'), this.photoCtrl.savePhoto);
        this.router.put('/photo/', upload.single('image'), this.photoCtrl.setPhoto);
        this.router.delete('/photo/', this.photoCtrl.deletePhoto);
        this.router.get('/order/', this.orderCtrl.getOrderDetails);
        this.router.post('/order/', this.orderCtrl.saveOrder);
        return this;
    };
    return Api;
}());
exports.Api = Api;
exports.default = new Api().init().router;
//# sourceMappingURL=api.js.map