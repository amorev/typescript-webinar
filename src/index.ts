import { CheckContains } from './lib/checker/constants';
import { CheckerService } from './lib/checker/service';

const service = new CheckerService;
const result = service.checkSite(CheckContains, {
    url: 'https://ya.ru',
    info: 'Ya.Rum.gdsadsaetSetting'
});
result.then(r => {
    console.log(r);
});
