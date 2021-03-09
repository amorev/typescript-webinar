import express from 'express';
import { BaseController } from './controllers/base';

export class App {
    public application;
    private port: number;
    private controllers: any[];

    constructor(port: number, controllers: [string, BaseController][]) {
        this.port = port;
        this.controllers = controllers;
        this.init();
    }

    private init() {
        this.application = express();
        this.controllers.forEach(([path, controller]) => {
            this.application.use(path, controller.router);
        });
    }

    public run() {
        console.log('started on', this.port);
        this.application.listen(this.port);
    }
}
