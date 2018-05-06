
import { Router, Request, Response, NextFunction } from "express";

import SqlSource from "../../src/datasource/SqlSource";
import { Model } from "../../src/models/Model";
import { User } from "../../src/models/User";
import { CtrlUtil } from "./CtrlUtil";


export default class UserCtrl
{

    isUserAuth(req: Request, res: Response, next: NextFunction)
    {
        let email = req.query.email;
        let password = req.query.password;        
        SqlSource.isUserAuth(email, password)
            .then((result: User) =>
            {                
                CtrlUtil.sendModel(res, result);
            });
    }

    saveUser(req: Request, res: Response, next: NextFunction)
    {        
        let user = new User(
            Model.generateId(),
            req.body.email,
            req.body.password,
            req.body.name,
            req.body.last_name,
            req.body.gender,
            req.body.height,
            req.body.weight,
            req.body.address,
            req.body.rol                                                                                                            
        );

        SqlSource.saveUser(user)
            .then((result: number) =>
            {
                let out = { user_id: result }
                CtrlUtil.sendObject(res, out);
            });
    }

    getUserDetails(req: Request, res: Response, next: NextFunction)
    {
        let userId = req.query.user_id;        
        SqlSource.getUserDetails(userId)
            .then((result: User) =>
            {
                CtrlUtil.sendModel(res, result);
            });
    }    

    setUser(req: Request, res: Response, next: NextFunction)
    {
        let userId = req.body.user_id;
        SqlSource.getUserDetails(userId)
            .then((result: User) =>
            {                
                let user = new User(
                    userId,
                    req.body.email ? req.body.email : result.email,
                    req.body.password ? req.body.password : result.password,
                    req.body.name ? req.body.name : result.name,
                    req.body.last_name ? req.body.last_name : result.last_name,
                    req.body.gender ? req.body.gender : result.gender,
                    req.body.height ? req.body.height : result.height,
                    req.body.weight ? req.body.weight : result.weight,
                    req.body.address ? req.body.address : result.address,
                    req.body.rol ? req.body.rol : result.rol,                    
                );
                
                SqlSource.setUser(user)
                    .then((result: void) =>
                        {
                            CtrlUtil.sendOk(res);
                        });                
            });
    }

    deleteUser(req: Request, res: Response, next: NextFunction)
    {
        let userId = req.query.user_id;
        SqlSource.deleteUser(userId)
            .then((result: void) =>
            {
                CtrlUtil.sendOk(res);
            });
    }
}