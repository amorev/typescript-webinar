import axios from 'axios';
import { CheckersFabric } from './checker';

async function run() {
    let url = 'https://ya.ru';
    let info = {url, checkData: "browser"};
    const checker200 = CheckersFabric.getChecker('200');
    const result = await checker200.checkSite({url});
    console.log(result);
}

run();
