
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { Model } from "../../src/models/Model";
import { Cart } from "../../src/models/Cart";
import { CtrlUtil } from "./CtrlUtil";
import { Product } from "../../src/models/Product";


export default class CartCtrl
{
    saveCart(req: Request, res: Response, next: NextFunction)
    {        
        let cart = new Cart( 
            req.body.user_id,
            req.body.product_id,
            req.body.quantity,            
            req.body.size,
        );

        SqlSource.saveCart(cart)
            .then((result: number) =>
            {
                let out = { cart_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getCartDetails(req: Request, res: Response, next: NextFunction)
    {
        let userId = req.query.user_id;
        let productId = req.query.product_id;
        SqlSource.getCartDetails(userId, productId)
            .then((result: Cart) =>
            {
                result.product.photo = "http://" + req.get('host') + "/images/" + result.product.photo;
                CtrlUtil.sendModel(res, result);
            });
    }    

    getCartList(req: Request, res: Response, next: NextFunction)
    {
        let userId = req.query.user_id;
        SqlSource.getCartList(userId)
            .then((result: [Cart]) =>
            {
                for(var i = 0; i<result.length;i++){
                    result[i].product.photo = "http://" + req.get('host') + "/images/" + result[i].product.photo;
                }                
                CtrlUtil.sendList(res, result);
            });
    }

    setCart(req: Request, res: Response, next: NextFunction)
    {
        let cartId = req.body.cart_id;
        let productId = req.body.product_id;
        SqlSource.getCartDetails(cartId, productId)
            .then((result: Cart) =>
            {
                let cart = new Cart(
                    cartId,                    
                    req.body.product_id ? req.body.product_id : result.product_id,
                    req.body.quantity ? req.body.quantity : result.quantity,                    
                    req.body.size ? req.body.size : result.size,
                );                
                SqlSource.setCart(cart)
                        .then((result: void) =>
                        {
                            CtrlUtil.sendOk(res);
                        });
                });            
    }

    deleteCart(req: Request, res: Response, next: NextFunction)
    {
        let userId = req.query.user_id;   
        let productId = req.query.product_id;         
        SqlSource.deleteCart(userId, productId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}