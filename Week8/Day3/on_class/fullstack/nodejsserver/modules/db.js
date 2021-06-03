const knex = require('knex');

const db = knex({
        client: 'pg',
        connection: {
            port:"5432",
            host: '127.0.0.1',
            user: 'postgres',
            password: '123123',
            database: 'dvdrental'
        }
})

const getCountries = () => {
    return db.select('*').from('country')  //return a promiss
}

const getCities = (id) => {
    return db.select('city_id','city')
    .from('city')
    .where({country_id:id})
    .orderBy('city')
}

module.exports ={
    getCountries,
    getCities
  }
  