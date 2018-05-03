
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { Model } from "../../src/models/Model";
import { Photo } from "../../src/models/Photo";
import { CtrlUtil } from "./CtrlUtil";

export default class PhotoCtrl
{
    savePhoto(req: Request, res: Response, next: NextFunction)
    {                        
        let photo = new Photo( 
            Model.generateId(),                       
            req.body.product_id,
            req.body.color_id,
            req.file.filename,
        );        
        SqlSource.savePhoto(photo)
            .then((result: number) =>
            {
                let out = { photo_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getPhotoDetails(req: Request, res: Response, next: NextFunction)
    {
        let photoId = req.query.photo_id;        
        SqlSource.getPhotoDetails(photoId)
            .then((result: Photo) =>
            {
                result.photo = "http://" + req.get('host') + "/images/" + result.photo;
                CtrlUtil.sendModel(res, result);
            });
    }

    getPhotoList(req: Request, res: Response, next: NextFunction)
    {
        let productId = req.query.product_id;
        let colorId = req.query.color_id;
        SqlSource.getPhotoList(productId, colorId)
            .then((result: [Photo]) =>
            {
                CtrlUtil.sendList(res, result);
            });
    }

    setPhoto(req: Request, res: Response, next: NextFunction)
    {
        let photoId = req.body.photo_id;
        SqlSource.getPhotoDetails(photoId)
            .then((result: Photo) =>
            {
                let photo = new Photo(
                    photoId,                    
                    req.body.product_id ? req.body.product_id : result.product_id,
                    req.body.color_id ? req.body.color_id : result.color_id,
                    req.file.path ? req.file.path : result.photo,
                );                                
                SqlSource.setPhoto(photo)
                    .then((result: void) =>
                    {
                        CtrlUtil.sendOk(res);
                    });
            });            
    }

    deletePhoto(req: Request, res: Response, next: NextFunction)
    {
        let photoId = req.body.photo_id;        
        SqlSource.deletePhoto(photoId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}