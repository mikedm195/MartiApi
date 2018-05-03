
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { Model } from "../../src/models/Model";
import { Order } from "../../src/models/Order";
import { CtrlUtil } from "./CtrlUtil";


export default class OrderCtrl
{
    saveOrder(req: Request, res: Response, next: NextFunction)
    {        
        let order = new Order( 
            Model.generateId(),                                   
            req.body.user_id,
            req.body.seller_id,
            Date.now(),
            req.body.details,            
        );        

        SqlSource.saveOrder(order)
            .then((result: number) =>
            {
                let out = { order_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getOrderDetails(req: Request, res: Response, next: NextFunction)
    {
        let orderId = req.query.order_id;        
        SqlSource.getOrderDetails(orderId)
            .then((result: Order) =>
            {
                CtrlUtil.sendModel(res, result);
            });
    }        

}