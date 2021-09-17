import { Application } from 'express';
import express from 'express';
import { CheckerController } from './controllers/CheckerController';

export class App {
    public app: Application;
    public port: number;

    constructor(appInit: {
        port: number, routes: any
    }) {
        this.app = express();
        this.port = appInit.port;
        this.routes(appInit.routes);
    }

    public routes(controllers: [CheckerController]) {
        controllers.forEach(controller => {
            controller.initRoutes();
            this.app.use(controller.path, controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Example app listening at http://localhost:${this.port}`);
        });
    }
}
