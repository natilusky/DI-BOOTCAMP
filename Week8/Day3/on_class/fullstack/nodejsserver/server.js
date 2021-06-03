const exp = require('express');
const cors = require('cors');
const DB = require('./modules/db.js');

const app = exp();
app.use(cors());


app.get('/getCountries', (req, res) => {
  DB.getCountries()
    .then(countries => {
      res.send(countries)
    })
    .catch(e => {
      res.send({ meesage: e })
    })
})

app.get('/getCities/:id', (req, res) => {
  DB.getCities(req.params.id)
    .then(cities => {
      res.send(cities)
    })
    .catch(e => {
      res.send({ meesage: e })
    })
})

app.listen(9000, () => {
  console.log('listen to port 9000');
})
