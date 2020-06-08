import { Checker } from './checker/namespace';
import CheckersFabric = Checker.CheckersFabric;
import Checker200Data = Checker.Checker200Data;
import Check200 = Checker.Check200;

const fabric = new CheckersFabric();
const checker200 = fabric.getChecker(Check200);
const checkInfo: Checker200Data = {
    url: "https://ya.ru"
};
checker200.checkSite(checkInfo)
    .then(result => {
        console.log(result);
    });
