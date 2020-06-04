module.exports = {
  fetchCities () {
    return [
      {
        id: 1,
        title: 'Moscow'
      },
      {
        id: 2,
        title: 'Moscow'
      }
    ]
  },
  fetchCityById (id) {
    return this.fetchCities().find(e => e.id === id)
  },
  fetchPeople () {
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
    ]
  }
}
