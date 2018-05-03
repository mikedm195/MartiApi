"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var logger = require("morgan");
var path = require("path");
var cors = require("cors");
var api_1 = require("./routes/api");
var App = /** @class */ (function () {
    function App() {
        //Configure app
        this.app = express();
        this.config();
        this.routes();
        //Init server & socket
        var port = this.normalizePort(process.env.PORT || '3000');
        this.server = this.app.listen(port);
        this.socket();
    }
    App.start = function () {
        return new App();
    };
    App.prototype.config = function () {
        var dirname = __dirname + "/..";
        this.app.use(express.static(path.join(dirname, "public")));
        this.app.use('/docs', express.static(path.join(dirname, 'docs')));
        this.app.set("views", path.join(dirname, "views"));
        this.app.set("view engine", "pug");
        this.app.use(logger("dev"));
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
    };
    App.prototype.routes = function () {
        var router;
        router = express.Router();
        this.app.use("/api/", api_1.default);
    };
    App.prototype.socket = function () {
        var io = require('socket.io').listen(this.server);
        io.on('connection', function (socket) {
            console.log('a user connected');
        });
        sendSocket();
        function sendSocket() {
            var time = new Date().getTime() / 70;
            var result = {
                data1: time % 400 <= 100 ? (time % 100) / 100 : 0,
                data2: time % 400 >= 100 && time % 400 < 200 ? (time % 100) / 100 : 0,
                data3: time % 400 >= 200 && time % 400 < 300 ? (time % 100) / 100 : 0,
                data4: time % 400 >= 300 ? (time % 100) / 100 : 0
            };
            io.emit('device', result);
            setTimeout(function () {
                sendSocket();
            }, 1000);
        }
    };
    App.prototype.normalizePort = function (val) {
        var port = parseInt(val, 10);
        if (isNaN(port))
            return val;
        if (port >= 0)
            return port;
        return false;
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map