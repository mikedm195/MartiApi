"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var multer = require("multer");
var Resources = /** @class */ (function () {
    function Resources() {
        this.router = express_1.Router();
        this.init();
    }
    Resources.prototype.init = function () {
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
        this.router.post('/resource/image/', function (req, res) {
            upload(req, res, function (err) {
                console.log(JSON.stringify(req.file));
                console.log(JSON.stringify(req.body));
                var result = {
                    url: "http://" + req.get('host') + "/users/" + req.file.filename
                };
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(result));
            });
        });
        return this;
    };
    return Resources;
}());
exports.Resources = Resources;
exports.default = new Resources().init().router;
//# sourceMappingURL=resources.js.map