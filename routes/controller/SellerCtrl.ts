
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { Model } from "../../src/models/Model";
import { Seller } from "../../src/models/Seller";
import { CtrlUtil } from "./CtrlUtil";


export default class SellerCtrl
{    
    saveSeller(req: Request, res: Response, next: NextFunction)
    {        
        let seller = new Seller( 
            Model.generateId(),                       
            req.body.name,                     
        );

        SqlSource.saveSeller(seller)
            .then((result: number) =>
            {
                let out = { seller_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getSellerDetails(req: Request, res: Response, next: NextFunction)
    {
        let sellerId = req.query.seller_id;        
        SqlSource.getSellerDetails(sellerId)
            .then((result: Seller) =>
            {
                CtrlUtil.sendModel(res, result);
            });
    }

    getSellerList(req: Request, res: Response, next: NextFunction)
    {
        let patientId = req.query.patient_id;
        SqlSource.getSellerList(patientId)
            .then((result: [Seller]) =>
            {
                CtrlUtil.sendList(res, result);
            });
    }

    setSeller(req: Request, res: Response, next: NextFunction)
    {
        let sellerId = req.body.seller_id;
        SqlSource.getSellerDetails(sellerId)
            .then((result: Seller) =>
            {
                let seller = new Seller(
                    sellerId,                    
                    req.body.name ? req.body.name : result.name,                    
                );                
                SqlSource.setSeller(seller)
                    .then((result: void) =>
                    {
                        CtrlUtil.sendOk(res);
                    });                        
            });            
    }

    deleteSeller(req: Request, res: Response, next: NextFunction)
    {
        let sellerId = req.query.seller_id;
        console.log("sellerId " + sellerId)
        SqlSource.deleteSeller(sellerId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}