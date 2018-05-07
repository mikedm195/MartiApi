
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { Model } from "../../src/models/Model";
import { Category } from "../../src/models/Category";
import { CtrlUtil } from "./CtrlUtil";


export default class CategoryCtrl
{
    saveCategory(req: Request, res: Response, next: NextFunction)
    {        
        let category = new Category( 
            Model.generateId(),                       
            req.body.name,
            req.body.description,            
        );

        SqlSource.saveCategory(category)
            .then((result: number) =>
            {
                let out = { category_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getCategoryDetails(req: Request, res: Response, next: NextFunction)
    {
        let categoryId = req.query.category_id;        
        SqlSource.getCategoryDetails(categoryId)
            .then((result: Category) =>
            {
                CtrlUtil.sendModel(res, result);
            });
    }

    getCategoryList(req: Request, res: Response, next: NextFunction)
    {        
        SqlSource.getCategoryList()
            .then((result: [Category]) =>
            {
                CtrlUtil.sendList(res, result);
            });
    }

    setCategory(req: Request, res: Response, next: NextFunction)
    {
        let categoryId = req.body.categoryt_id;
        SqlSource.getCategoryDetails(categoryId)
            .then((result: Category) =>
            {
                let category = new Category(
                    categoryId,                    
                    req.body.name ? req.body.name : result.name,
                    req.body.description ? req.body.description : result.description,                                        
                );                
                SqlSource.setCategory(category)
                        .then((result: void) =>
                        {
                            CtrlUtil.sendOk(res);
                        });
                });            
    }

    deleteCategory(req: Request, res: Response, next: NextFunction)
    {
        let categoryId = req.query.category_id;        
        SqlSource.deleteCategory(categoryId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}