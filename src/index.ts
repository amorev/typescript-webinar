import { App } from './lib/app';
import { HomeController } from './lib/controllers/home';
import { HelloController } from './lib/controllers/hello';

const app = new App(
    3000,
    [
        ['/home', new HomeController()],
        ['/hello', new HelloController()]
    ]);
app.run();
