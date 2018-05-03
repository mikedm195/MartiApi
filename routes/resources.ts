import { NextFunction, Request, Response, Router } from "express";
import * as multer from 'multer'


export class Resources
{

  router: Router;

  constructor()
  {
    this.router = Router();
    this.init();
  }


  public init(): Resources
  {

    /**
    * @api {post} /resource/image/ Save image
    * @apiName SaveImage
    * @apiGroup Resource
    * 
    * @apiParam {Object} image Image data.
    * 
    * @apiSuccess {Number} url Image path.
    */

    var upload = multer({
      dest: "public/users",
    }).single('image');

    this.router.post('/resource/image/',
      function (req, res)
      {
        upload(req, res, function (err)
        {
          console.log(JSON.stringify(req.file))        
          console.log(JSON.stringify(req.body))        
          let result = {
            url: "http://" + req.get('host') + "/users/" + req.file.filename
          }           
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(result));
        });
      });

    return this;
  }
}

export default new Resources().init().router;