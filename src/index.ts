import axios from 'axios';

async function checkSite(url, type: '200' | 'html' = '200', needHtml?: string): Promise<boolean> {
    try {
        const data = await axios.get(url);
        if (type === '200')
        return data.status === 200;
        else if (type === 'html') {
            return data.data.indexOf(needHtml) !== -1
        }
    } catch (e) {
        return false;
    }
}

async function run() {
    let url = 'https://ya.ru';
    const result = await checkSite(url, 'html', 'ua_browser_dfdsfesktop ');
    console.log(result);
}

run();
