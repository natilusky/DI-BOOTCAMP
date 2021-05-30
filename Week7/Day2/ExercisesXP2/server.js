const exp = require('express');

const app = exp();

app.use('/', exp.static(__dirname + '/public'))

const user = {
  firstname: 'John',
  lastname: 'Doe'
}

app.get('/', (req, res) => {
  res.send(user)
  console.log(user);
})

app.get('/:id', (req, res) => {
  console.log(req.params);
  res.send(req.params)
})

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(3000)

