import axios from 'axios';
import { Check200 } from './lib/checker';

(async () => {
    const c = new Check200();
    const result = await c.check({
        url: 'https://ysadasa.ru'
    });
    console.log(result);
})();

