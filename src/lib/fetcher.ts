import axios from 'axios';

export type People = {
    id: number,
    name: string,
    user: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
    },
    phone: string,
    website: string,
}


export async function fetch(): Promise<People[]> {
    return await axios.get('https://jsonplaceholder.typicode.com/users').then(r => r.data);
}
