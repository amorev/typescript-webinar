import { AxiosInstance } from 'axios';
import { authorizedRequest } from './decorators';

export class Fetcher {
    constructor(private axios: AxiosInstance) {
    }

    public fetchUsers() {
        return this.axios.get('https://jsonplaceholder.typicode.com/users/1');
    }

    @authorizedRequest
    public fetchProtectedUsers() {
        return this.axios.get('https://jsonplaceholder.typicode.com/users/1');
    }
}
