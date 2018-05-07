
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { Model } from "../../src/models/Model";
import { Order } from "../../src/models/Order";
import { CtrlUtil } from "./CtrlUtil";


export default class OrderCtrl {
    saveOrder(req: Request, res: Response, next: NextFunction) {
        var details = JSON.parse(req.body.details);
        
        var today = new Date();
        
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var date = parseInt([yyyy,(mm > 9 ? '' : '0') + mm,(dd > 9 ? '' : '0') + dd].join(''));        
         
        let order = new Order(
            Model.generateId(),
            req.body.user_id,
            req.body.seller_id,
            date,
            details,
        );        

        SqlSource.saveOrder(order)
            .then((result: number) => {
                let out = { order_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getOrderDetails(req: Request, res: Response, next: NextFunction) {
        let orderId = req.query.order_id;
        SqlSource.getOrderDetails(orderId)
            .then((result: Order) => {
                CtrlUtil.sendModel(res, result);
            });
    }

}