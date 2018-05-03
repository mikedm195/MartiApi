import { NextFunction, Request, Response, Router } from "express";
import CartCtrl from "./controller/CartCtrl";
import CategoryCtrl from "./controller/CategoryCtrl";
import OrderCtrl from "./controller/OrderCtrl";
import PhotoCtrl from "./controller/PhotoCtrl";
import ProductCtrl from "./controller/ProductCtrl";
import SellerCtrl from "./controller/SellerCtrl";
import UserCtrl from "./controller/UserCtrl";
import * as multer  from "multer";

const storage = multer.diskStorage({
  destination: function(req, res, cb){
    cb(null, "public/images");
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  }else{
    cb(null, false);
  }
}

const upload = multer({storage: storage, fileFilter: fileFilter});

export class Api
{

  router: Router
  cartCtrl: CartCtrl;
  categoryCtrl: CategoryCtrl;
  orderCtrl: OrderCtrl;
  photoCtrl: PhotoCtrl;
  productCtrl: ProductCtrl;
  sellerCtrl: SellerCtrl;
  userCtrl : UserCtrl;

  constructor()
  {
    this.router = Router();
    this.cartCtrl = new CartCtrl();
    this.categoryCtrl = new CategoryCtrl();
    this.orderCtrl = new OrderCtrl();
    this.photoCtrl = new PhotoCtrl();
    this.productCtrl = new ProductCtrl();
    this.sellerCtrl = new SellerCtrl();
    this.userCtrl = new UserCtrl();
    this.init();
  }

  public init() : Api
  {

    this.router.get('/user/auth/', this.userCtrl.isUserAuth);

    this.router.get('/user/', this.userCtrl.getUserDetails);    

    this.router.post('/user/', this.userCtrl.saveUser);

    this.router.put('/user/', this.userCtrl.setUser);

    this.router.delete('/user/', this.userCtrl.deleteUser);    

    this.router.get('/product/', this.productCtrl.getProductDetails);

    this.router.get('/product/list/',this.productCtrl.getProductList);

    this.router.post('/product/', upload.single('photo'), this.productCtrl.saveProduct);

    this.router.put('/product/', upload.single('photo'), this.productCtrl.setProduct);

    this.router.delete('/product/',this.productCtrl.deleteProduct);

    this.router.get('/cart/',this.cartCtrl.getCartDetails);

    this.router.get('/cart/list/',this.cartCtrl.getCartList);

    this.router.post('/cart/',this.cartCtrl.saveCart);

    this.router.put('/cart/',this.cartCtrl.setCart);

    this.router.delete('/cart/',this.cartCtrl.deleteCart);

    this.router.get('/category/',this.categoryCtrl.getCategoryDetails);

    this.router.post('/category/',this.categoryCtrl.saveCategory);

    this.router.put('/category/',this.categoryCtrl.setCategory);

    this.router.delete('/category/',this.categoryCtrl.deleteCategory);

    this.router.get('/seller/',this.sellerCtrl.getSellerDetails);

    this.router.get('/seller/list/',this.sellerCtrl.getSellerList);

    this.router.post('/seller/',this.sellerCtrl.saveSeller);

    this.router.put('/seller/',this.sellerCtrl.setSeller);

    this.router.delete('/seller/',this.sellerCtrl.deleteSeller);

    this.router.get('/photo/',this.photoCtrl.getPhotoDetails);

    this.router.get('/photo/list/',this.photoCtrl.getPhotoList);

    this.router.post('/photo/', upload.single('image'), this.photoCtrl.savePhoto);

    this.router.put('/photo/', upload.single('image'),this.photoCtrl.setPhoto);

    this.router.delete('/photo/',this.photoCtrl.deletePhoto);    

    this.router.get('/order/',this.orderCtrl.getOrderDetails);

    this.router.post('/order/',this.orderCtrl.saveOrder);    

    return this;
  }
}

export default new Api().init().router;