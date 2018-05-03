import { Response } from "express";
import { Model } from "../../src/models/Model";

export class CtrlUtil
{
    public static sendOk(res: Response)
    {
        res.send();
    }

    public static sendObject(res: Response, result)
    {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result ? result : {}));
    }

    public static sendList(res: Response, result : Model[])
    {
        res.setHeader('Content-Type', 'application/json');
        let out = [];
        for (let r of result)
            out.push(r.export());
        res.send(JSON.stringify(out ? out : []));
    }

    public static sendModel(res: Response, result : Model)
    {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result ? result.export() : {}));
    }
}