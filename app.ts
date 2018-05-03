import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as cors from "cors";
import * as socket from "socket.io";

import Api from "./routes/api";
import Resources from "./routes/resources";

export class App
{

  public app;
  public server;

  public static start(): App
  {
    return new App();
  }

  constructor()
  {
    //Configure app
    this.app = express();
    this.config();
    this.routes();

    //Init server & socket
    let port = this.normalizePort(process.env.PORT || '3000');
    this.server = this.app.listen(port);
    this.socket();
  }


  public config()
  {
    let dirname = __dirname + "/.."
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
  }

  private routes()
  {
    let router: express.Router;
    router = express.Router();
    this.app.use("/api/", Api);    
  }

  private socket()
  {
    var io = require('socket.io').listen(this.server);
    io.on('connection', function (socket)
    {
      console.log('a user connected');
    });
    sendSocket();

    function sendSocket()
    {
      var time = new Date().getTime() / 70;
      let result = {
        data1: time % 400 <= 100 ? (time % 100) / 100 : 0,
        data2: time % 400 >= 100 && time % 400 < 200 ? (time % 100) / 100 : 0,
        data3: time % 400 >= 200 && time % 400 < 300 ? (time % 100) / 100 : 0,
        data4: time % 400 >= 300 ? (time % 100) / 100 : 0
      };
      io.emit('device', result);
      setTimeout(function ()
      {
        sendSocket();
      }, 1000)
    }
  }

  private normalizePort(val)
  {
    var port = parseInt(val, 10);
    if (isNaN(port))
      return val;
    if (port >= 0)
      return port;
    return false;
  }
}