//express
const exp = require('express');
const app = exp();
app.use('/', exp.static(__dirname + '/public'))


//main
app.get('/aboutMe/:hobby', (req, res) => {
    let hobby = req.params.hobby
    if (typeof hobby === 'string') {
        res.send(hobby);
    } else {
        res.status(404)
        res.send(res.status)
    }
})

app.use('/pic', exp.static(__dirname + '/public/pic.html'))
app.use('/form', exp.static(__dirname + '/public/form.html'))

app.get('/formdata', (req, res) => {
    res.send(`${req.query.mail} sent you a message "${req.query.detail}"`)
  })

// app.listen(5000);
app.set('port', 5000);
app.listen(app.get('port'), () => {
    console.log(`App started at port ${app.get('port')}`);
})
