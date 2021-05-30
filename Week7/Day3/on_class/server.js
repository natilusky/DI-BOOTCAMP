// 1. Create a new folder for your new server
// 2. Create server.js
// 3. Create index.html file in a public folder
// 4. Open your browser and go to http://localhost:5000
// and you should get your html file

const exp = require('express');
const app = exp();

//app.listen(5000);
//another way
app.set('port', 5000)
app.listen(app.get('port'), () => {
    console.log(`App start at port ${app.get('port')}`);
})

app.use('/', exp.static(__dirname + '/public'))



// 5. Add an name input and a button to your html file
// 6. Send the data (the name from the input) to the server with POST method
// 7. console log it in the server side
// 8. response with a {message: 'ok'}

const bp = require('body-parser');

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json());

// app.post('/addUser', (req, res) => {
//     console.log(req.body);
//     res.send({ message: 'ok' })
// })

// // another way

// app.route('/addUser')
//     .post  ((req, res) => {
//         console.log(req.body);
//         res.send({ message: 'ok' })
//     })
//     .get  ((req, res) => {
//         console.log(req.query);
//     })


// 7. Save all names as a JSON file in your sever - use fs
// Hint: don't use append use write
const fs = require('fs');

app.post('/addUser', (req, res) => {
    let userArr = []

    //reading from the file
    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    userArr = JSON.parse(fileStr)

    
    userArr.push(req.body)  //add the new user to array
   
    fs.writeFile('./users', JSON.stringify(userArr), (err) => {
        if (err) {
            console.log(err);
        }
        
    })
    res.send({ message: 'ok' })
})

// 9. Create a button to show all names in your web page - use GET method

app.get('/showUsers', (req,res) => {
    let userArr = []

    const file = fs.readFileSync('./users');
    let fileStr = file.toString();
    userArr = JSON.parse(fileStr)
    res.send(userArr)
})

// 10. Create a button to check if a name exist - use rest api (request.params)
// 11. show a meesage yes or no