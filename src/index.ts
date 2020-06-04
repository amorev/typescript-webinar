import { Fetcher } from './lib/fetcher';

const fetcher = new Fetcher();
console.log('Script started');
const people = fetcher.fetchPeople();
people.forEach(el => {
    console.log('name is ', el.name);
    console.log('city is ', fetcher.fetchCityById(el.city_id).title);
});
