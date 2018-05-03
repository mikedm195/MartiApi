
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { Model } from "../../src/models/Model";
import { Cart } from "../../src/models/Cart";
import { CtrlUtil } from "./CtrlUtil";


export default class CartCtrl
{
    saveCart(req: Request, res: Response, next: NextFunction)
    {        
        let cart = new Cart( 
            Model.generateId(),                       
            req.body.product_id,
            req.body.quantity,
            req.body.color,
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
        let cartId = req.query.cart_id;        
        SqlSource.getCartDetails(cartId)
            .then((result: Cart) =>
            {
                CtrlUtil.sendModel(res, result);
            });
    }    

    getCartList(req: Request, res: Response, next: NextFunction)
    {
        let patientId = req.query.patient_id;
        SqlSource.getCartList(patientId)
            .then((result: [Cart]) =>
            {
                CtrlUtil.sendList(res, result);
            });
    }

    setCart(req: Request, res: Response, next: NextFunction)
    {
        let cartId = req.body.cart_id;
        SqlSource.getCartDetails(cartId)
            .then((result: Cart) =>
            {
                let cart = new Cart(
                    cartId,                    
                    req.body.product_id ? req.body.product_id : result.product_id,
                    req.body.quantity ? req.body.quantity : result.quantity,
                    req.body.color ? req.body.color : result.color,
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
        let cartId = req.body.cart_id;        
        SqlSource.deleteCart(cartId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}