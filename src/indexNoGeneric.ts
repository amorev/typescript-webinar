import { check } from './lib/checker';

const url = "https://ya.ru";

async function run() {
    const result200 = await check({
        url,
    }, "200");
    const result = await check({
        url,
        data: "browser"
    }, "html");
    const resultWeather = await check({
        url,
        neededDegree: 10
    }, "weather");
    console.log({
        result,
        result200,
        resultWeather
    });
}

run();
