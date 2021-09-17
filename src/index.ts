import axios from 'axios';
import { Check200, CheckHtml } from './checker';

async function run() {
    let url = 'https://ya.ru';
    const checker200 = new Check200();
    const checkerHtml = new CheckHtml();
    const result = await checker200.checkSite({url});
    const resultHtml = await checkerHtml.checkSite({url, checkData: "browser"});
    console.log({ result, resultHtml });
}

run();
