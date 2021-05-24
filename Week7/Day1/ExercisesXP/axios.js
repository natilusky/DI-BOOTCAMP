const a = require('axios');

a.get('https://jsonplaceholder.typicode.com/users')
  .then(res => console.log(res))
  .then(res => console.log(res.data))