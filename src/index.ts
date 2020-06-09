import * as bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';
import HomeController from './controllers/HomeController';
import App from './app/app';

const app = new App({
    port: 5000,
    routes: [
        new HomeController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({extended: true}),
        loggerMiddleware
    ]
});

app.listen();
