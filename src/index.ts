import { CheckersFabric } from './lib/checker';

(async () => {
    const fabric = new CheckersFabric()
    const c = fabric.getChecker('size')
    const result = await c.check({
        url: 'https://ya.ru',
    });
    console.log(c);
})();

