import { CheckersFabric, CheckerType } from './lib/checkers';

const checker200 = CheckersFabric.GetChecker(CheckerType.check200);
CheckersFabric.GetChecker(CheckerType.check200);
CheckersFabric.GetChecker(CheckerType.check200);
CheckersFabric.GetChecker(CheckerType.check200);
CheckersFabric.GetChecker(CheckerType.check200);
CheckersFabric.GetChecker(CheckerType.check200);
CheckersFabric.GetChecker(CheckerType.check200);
const checkHtml = CheckersFabric.GetChecker(CheckerType.checkHtml);

checker200.check({
    url: "https://ya.ru",
});
checkHtml.check({
    url: "https://ya.ru",
    data: "123123"
});
