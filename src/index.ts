import { Fetcher } from './libs';
import axios from 'axios';

const fetcher = new Fetcher(axios.create());
const users = fetcher.fetchUsers();
users.then(r => {
    // console.log(r.data);
});
