import App from './app/app';
import * as bodyParser from 'body-parser';
import HomeController from './controllers/HomeController';

const app = new App({
    port: 3000,
    routes: [
        new HomeController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({extended: true})
    ]
});

app.listen();
