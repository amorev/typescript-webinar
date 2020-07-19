import App from './app/app';
import * as bodyParser from 'body-parser';
import { ServiceHandler, servicesTypes } from './lib/service';

const port = parseInt(process.env.PORT, 10) || 3000;
const service: servicesTypes = process.env.SERVICE || 'moneySender';

const app = new App({
    port,
    service: ServiceHandler.getService(service),
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({extended: true})
    ]
});

app.listen();
