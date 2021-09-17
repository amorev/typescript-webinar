import { App } from './app';
import { CheckerController } from './controllers/CheckerController';
import { NewController } from './controllers/NewController';

async function run() {
    const Application = new App({
        port: 3000,
        routes: [
            new CheckerController(),
            new NewController()
        ]
    });
    Application.listen();
    // app.get('/', (req, res) => {
    //     res.send('Hello World!');
    // });
    // app.get('/checker', async (req, res) => {
    //     const checker = CheckersFabric.getChecker(req.query.type);
    //     const result = await checker.checkSite({
    //         url: req.query.url,
    //         checkData: req.query.data
    //     });
    //     res.send(result);
    // });

    // app.listen(port, () => {
    //     console.log(`Example app listening at http://localhost:${port}`);
    // });


    // let url = 'https://ya.ru';
    // let info = {url, checkData: "browser"};
    // const checker200 = CheckersFabric.getChecker('200');
    // const result = await checker200.checkSite({url});
    // console.log(result);
}

run();

