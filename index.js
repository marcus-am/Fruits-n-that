require('dotenv').config(); // TO INTERACT with .env file, keeps your port safe and allows it to be safe and unused by others
const express = require('express');
const fruits = require('./fruits');
const app = express();
const port = process.env.PORT;
//const port = 3000;
const cors = require('cors')

app.use(cors())   
app.use("/fruits", express.json()) // this converts everything to middleware, if you put "/..." this will only interact with the named root

app.get('/', (req, res) => {
    res.send('hello fruity')
})

app.get('/fruits', (req, res) => {
    res.send(fruits)
})

// app.get('/fruits/:name', (req, res) => {
//     for(let i = 0; i < fruits.length; i++){
//         if (req === fruits[i]) {
//             req = req.toLowerCase();
//         let arr = req.split('');
//         arr[0] = arr[0].toUpperCase();
//         req = arr.join('');

//     res.send(`return a fruit with name ${req.params.name}`)
//         }
//     }
//     res.send('no fruit found')
// })

app.get('/fruits/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === name)
    if(fruit===undefined) {
        res.status(404).send('fruit doesnt exist')
    } else {
        res.send(fruit)
    }
})
const ids = fruits.map((fruit) => fruit.id);
let maxId = Math.max(...ids)

app.post('/fruits', (req, res) => {
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == req.body.name)
    if (fruit != undefined) {
        res.status(409).send('this fruit already exists')
    }else{
        maxId += 1;
        req.body.id = maxId;


        fruits.push(req.body);
        res.status(201).send(req.body);
    }
})

app.delete('/fruits/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    const fruitIndex = fruits.findIndex((fruit) => fruit.name.toLowerCase() == name)
    if(fruitIndex == -1) { //findIndex will return -1 if it is not there
        res.status(404).send('the fruit does not exist')

    }else{ // try to create a standardised version to match other objects e.g. cucumber = Cucumber
        fruits.splice(fruitIndex, 1) 
        res.sendStatus(204)
    }
})



app.listen(port, () => {
    console.log(`app is running on port ${port}`)
})

// DEPLOT 
// launching the wesbite into the web
// encourage to use AWS , free 1 year
// Render we will use to deploy here