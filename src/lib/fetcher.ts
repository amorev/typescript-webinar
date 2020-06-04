import { City } from '../types/city';
import { Person } from '../types/person';

export class Fetcher {
    public fetchCities(): City[] {
        return [
            {
                id: 1,
                title: 'Moscow'
            },
            {
                id: 2,
                title: 'Moscow'
            }
        ];
    }

    public fetchCityById(id: number): City {
        return this.fetchCities().find(e => e.id === id);
    }

    public fetchPeople(): Person[] {
        return [
            {
                id: 1,
                name: 'Anton',
                city_id: 2
            },
            {
                id: 2,
                name: 'Ivan',
                city_id: 2
            },
            {
                id: 3,
                name: 'David',
                city_id: 1
            }
        ];
    }
}
