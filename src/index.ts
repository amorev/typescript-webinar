import axios from 'axios';

const url = 'https://ya.ru';
axios.get(url)
    .then(r => {
        if (r.status === 200) {
            console.log('success');
        } else {
            console.log('error');
        }
    })
    .catch(e => {
        console.log('error');
    });
