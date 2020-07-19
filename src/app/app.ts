import express from 'express';
import { Application } from 'express';
import { ServiceInterface } from '../lib/service';

class App {
    public app: Application;
    public port: number;

    constructor(appInit: { port: number; middleWares: any; service: ServiceInterface; }) {
        this.app = express();
        this.port = appInit.port;

        this.middlewares(appInit.middleWares);
        this.routes(appInit.service.getRoutes());
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare);
        });
    }

    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            controller.initRoutes();
            this.app.use(controller.path, controller.router);
        });
    }


    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`);
        });
    }
}

export default App;
