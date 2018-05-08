
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { Model } from "../../src/models/Model";
import { Product } from "../../src/models/Product";
import { CtrlUtil } from "./CtrlUtil";
import * as fs from 'fs';


export default class ProductCtrl
{
    saveProduct(req: Request, res: Response, next: NextFunction)
    {                
        console.log(JSON.stringify(req.body,null,"\t"))
        console.log(JSON.stringify(req.file,null,"\t"))
        fs.writeFile("arghhhh.jpg", new Buffer(req.body.photo, "base64"), function(err) {});
        let product = new Product( 
            Model.generateId(),                       
            req.body.category_id,
            req.body.name,
            req.file.filename,
            //req.body.photo,
            req.body.video,
            req.body.price,            
            req.body.color,  
            req.body.age,  
        );

        SqlSource.saveProduct(product)
            .then((result: number) =>
            {
                let out = { product_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getProductDetails(req: Request, res: Response, next: NextFunction)
    {
        let productId = req.query.product_id;  
        console.log(req.query.product_id)      
        SqlSource.getProductDetails(productId)
            .then((result: Product) =>
            {
                console.log(JSON.stringify(result, null, "\t"));
                result.photo = "http://" + req.get('host') + "/images/" + result.photo;
                CtrlUtil.sendModel(res, result);
            });
    }

    getProductList(req: Request, res: Response, next: NextFunction)
    {
        let categoryId = req.query.category_id;
        let color = req.query.color;
        let age = req.query.age;
        SqlSource.getProductList(categoryId, color, age)
            .then((result: [Product]) =>
            {
                for(var i = 0; i<result.length;i++){
                    result[i].photo = "http://" + req.get('host') + "/images/" + result[i].photo;
                }
                CtrlUtil.sendList(res, result);
            });
    }

    setProduct(req: Request, res: Response, next: NextFunction)
    {        
        let productId = req.body.product_id;        
        SqlSource.getProductDetails(productId)
            .then((result: Product) =>
            {                
                console.log(JSON.stringify(result, null, "\t"));
                let product = new Product(
                    productId,                                        
                    req.body.category_id ? req.body.category_id : result.category_id,
                    req.body.name ? req.body.name : result.name,                    
                    req.file.filename ? req.file.filename : result.photo,
                    req.body.video ? req.body.video : result.video,
                    req.body.price ? req.body.price : result.price,                    
                    req.body.color ? req.body.color : result.color,
                    req.body.age ? req.body.age : result.age,      
                );                
                SqlSource.setProduct(product)
                    .then((result: void) =>
                    {
                        CtrlUtil.sendOk(res);
                    });
            });            
    }

    deleteProduct(req: Request, res: Response, next: NextFunction)
    {
        let productId = req.query.product_id;        
        SqlSource.deleteProduct(productId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}