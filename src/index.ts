const fetcher = require('./lib/fetcher');

console.log('Script started');
const people = fetcher.fetchPeople();
people.forEach(el => {
    console.log('name is ', el.name);
    console.log('city is ', fetcher.fetchCityById(el.city_id).title);
});
