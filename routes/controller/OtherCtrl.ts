
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { Model } from "../../src/models/Model";
import { CtrlUtil } from "./CtrlUtil";


export default class OtherCtrl
{
    getColorList(req: Request, res: Response, next: NextFunction)
    {        
        SqlSource.getColorList()
            .then((result: [string]) =>
            {                
                CtrlUtil.sendObject(res, result);
            });
    }

    getAgeList(req: Request, res: Response, next: NextFunction)
    {        
        SqlSource.getAgeList()
            .then((result: [string]) =>
            {                
                CtrlUtil.sendObject(res, result);
            });
    }
}