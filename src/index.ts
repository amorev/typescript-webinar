import { Check200 } from './lib/checker/constants';
import { CheckerService } from './lib/checker/service';

const service = new CheckerService;
const result = service.checkSite(Check200, 'https://yaasdsda.ru');
result.then(r => {
    console.log(r);
});
