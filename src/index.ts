import { fetch, People } from './lib/fetcher';

function handlePeople (people: People) {
    console.log(people.name);
}

fetch().then(d => {
    d.forEach(people => {
        handlePeople(people);
    })
    console.log(d);
})

