import axios from 'axios';
import { CheckersFabric } from './checker';

const express = require('express');
const app = express();
const port = 3000;

async function run() {


    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.get('/checker', async (req, res) => {
        const checker = CheckersFabric.getChecker(req.query.type);
        const result = await checker.checkSite({
            url: req.query.url,
            checkData: req.query.data
        });
        res.send(result);
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });


    // let url = 'https://ya.ru';
    // let info = {url, checkData: "browser"};
    // const checker200 = CheckersFabric.getChecker('200');
    // const result = await checker200.checkSite({url});
    // console.log(result);
}

run();
